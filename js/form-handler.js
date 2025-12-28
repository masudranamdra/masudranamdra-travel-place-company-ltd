// Form Handler JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const travelForm = document.getElementById('travelDataForm');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Load saved data if exists
    const savedData = localStorage.getItem('travelFormData');
    if (savedData && downloadBtn) {
        downloadBtn.disabled = false;
        downloadBtn.classList.add('hover-pulse');
        
        // Populate form with saved data
        try {
            const formData = JSON.parse(savedData);
            populateForm(formData);
            showNotification('পূর্বের ডাটা লোড করা হয়েছে', 'info');
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
    
    // Populate form with data
    function populateForm(data) {
        // Personal Info
        if (data.personalInfo) {
            const pi = data.personalInfo;
            setValue('fullName', pi.fullName);
            setValue('username', pi.username);
            setValue('email', pi.email);
            setValue('mobile', pi.mobile);
            setValue('altMobile', pi.altMobile);
            setValue('dob', pi.dob);
            setValue('age', pi.age);
            setValue('gender', pi.gender);
            setValue('nationality', pi.nationality);
        }
        
        // Location Details
        if (data.locationDetails) {
            const ld = data.locationDetails;
            setValue('country', ld.country);
            setValue('division', ld.division);
            setValue('district', ld.district);
            setValue('upazila', ld.upazila);
            setValue('postCode', ld.postCode);
            setValue('fullAddress', ld.fullAddress);
            setValue('currentCity', ld.currentCity);
        }
        
        // Education Info
        if (data.educationInfo) {
            const ei = data.educationInfo;
            setValue('education', ei.education);
            setValue('profession', ei.profession);
            setValue('company', ei.company);
            setValue('skills', ei.skills);
            setValue('experience', ei.experience);
            setValue('visitPurpose', ei.visitPurpose);
            
            // Checkboxes for interests
            if (ei.interests && Array.isArray(ei.interests)) {
                document.querySelectorAll('input[name="interests"]').forEach(cb => {
                    if (ei.interests.includes(cb.value)) {
                        cb.checked = true;
                    }
                });
            }
        }
        
        // Website Info
        if (data.websiteInfo) {
            const wi = data.websiteInfo;
            setValue('source', wi.source);
            setValue('visitedBefore', wi.visitedBefore);
            setValue('ratingValue', wi.rating);
            setValue('serviceInterest', wi.serviceInterest);
            setValue('feedback', wi.feedback);
            setValue('updates', wi.updates);
            
            // Set rating stars
            if (wi.rating) {
                const stars = document.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    if (index < wi.rating) {
                        star.classList.add('active');
                    }
                });
            }
        }
    }
    
    function setValue(id, value) {
        const element = document.getElementById(id);
        if (element && value) {
            element.value = value;
        }
    }
    
    // Download PDF functionality
    if (downloadBtn) {
        downloadBtn.addEventListener('click', generatePDF);
    }
    
    // Generate PDF
    async function generatePDF() {
        const savedData = localStorage.getItem('travelFormData');
        if (!savedData) {
            showNotification('কোন ডাটা পাওয়া যায়নি', 'error');
            return;
        }
        
        try {
            const formData = JSON.parse(savedData);
            
            // Show loading
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> প্রস্তুত হচ্ছে...';
            downloadBtn.disabled = true;
            
            // Create PDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Add fonts for Bengali support
            doc.setFont('helvetica', 'normal');
            
            // Title
            doc.setFontSize(20);
            doc.setTextColor(44, 62, 80);
            doc.text('ভ্রমণ ডাটা ফর্ম', 105, 20, { align: 'center' });
            
            // Subtitle
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text('আমরা এখন বিশ্ব দেখব', 105, 30, { align: 'center' });
            doc.text(`তৈরি করা হয়েছে: ${new Date().toLocaleDateString('bn-BD')}`, 105, 37, { align: 'center' });
            
            // Line separator
            doc.setDrawColor(52, 152, 219);
            doc.setLineWidth(0.5);
            doc.line(20, 42, 190, 42);
            
            let yPos = 50;
            
            // Section 1: Personal Information
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('১. ব্যক্তিগত তথ্য', 20, yPos);
            yPos += 10;
            
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            
            const personalInfo = formData.personalInfo || {};
            const personalDetails = [
                ['পূর্ণ নাম:', personalInfo.fullName],
                ['ইউজারনেম:', personalInfo.username],
                ['ইমেইল:', personalInfo.email],
                ['মোবাইল:', personalInfo.mobile],
                ['বিকল্প মোবাইল:', personalInfo.altMobile],
                ['জন্ম তারিখ:', personalInfo.dob],
                ['বয়স:', personalInfo.age],
                ['লিঙ্গ:', personalInfo.gender],
                ['জাতীয়তা:', personalInfo.nationality]
            ];
            
            personalDetails.forEach(([label, value]) => {
                if (value) {
                    doc.text(`${label} ${value}`, 25, yPos);
                    yPos += 7;
                }
            });
            
            yPos += 5;
            
            // Section 2: Location Details
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
            
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('২. ঠিকানা ও অবস্থান', 20, yPos);
            yPos += 10;
            
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            
            const locationInfo = formData.locationDetails || {};
            const locationDetails = [
                ['দেশ:', locationInfo.country],
                ['বিভাগ:', locationInfo.division],
                ['জেলা:', locationInfo.district],
                ['উপজেলা/থানা:', locationInfo.upazila],
                ['পোস্ট কোড:', locationInfo.postCode],
                ['বর্তমান শহর:', locationInfo.currentCity]
            ];
            
            locationDetails.forEach(([label, value]) => {
                if (value) {
                    doc.text(`${label} ${value}`, 25, yPos);
                    yPos += 7;
                }
            });
            
            // Full address
            if (locationInfo.fullAddress) {
                doc.text('পূর্ণ ঠিকানা:', 25, yPos);
                yPos += 7;
                const addressLines = doc.splitTextToSize(locationInfo.fullAddress, 160);
                addressLines.forEach(line => {
                    doc.text(line, 30, yPos);
                    yPos += 7;
                });
            }
            
            yPos += 5;
            
            // Section 3: Education & Profession
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
            
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('৩. শিক্ষা / পেশা / আগ্রহ', 20, yPos);
            yPos += 10;
            
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            
            const educationInfo = formData.educationInfo || {};
            const educationDetails = [
                ['শিক্ষাগত যোগ্যতা:', educationInfo.education],
                ['বর্তমান পেশা:', educationInfo.profession],
                ['প্রতিষ্ঠান:', educationInfo.company],
                ['দক্ষতা:', educationInfo.skills],
                ['অভিজ্ঞতা (বছর):', educationInfo.experience],
                ['ভ্রমণের উদ্দেশ্য:', educationInfo.visitPurpose]
            ];
            
            educationDetails.forEach(([label, value]) => {
                if (value) {
                    doc.text(`${label} ${value}`, 25, yPos);
                    yPos += 7;
                }
            });
            
            // Interests
            if (educationInfo.interests && educationInfo.interests.length > 0) {
                doc.text('আগ্রহের বিষয়:', 25, yPos);
                yPos += 7;
                doc.text(educationInfo.interests.join(', '), 30, yPos);
                yPos += 7;
            }
            
            yPos += 5;
            
            // Section 4: Website Interaction
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
            
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('৪. ওয়েবসাইট সম্পর্কিত তথ্য', 20, yPos);
            yPos += 10;
            
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            
            const websiteInfo = formData.websiteInfo || {};
            const websiteDetails = [
                ['ওয়েবসাইটের উৎস:', websiteInfo.source],
                ['আগে ভিজিট করেছেন:', websiteInfo.visitedBefore],
                ['রেটিং:', websiteInfo.rating ? '⭐'.repeat(websiteInfo.rating) : ''],
                ['সার্ভিস আগ্রহ:', websiteInfo.serviceInterest],
                ['আপডেট চান:', websiteInfo.updates]
            ];
            
            websiteDetails.forEach(([label, value]) => {
                if (value) {
                    doc.text(`${label} ${value}`, 25, yPos);
                    yPos += 7;
                }
            });
            
            // Feedback
            if (websiteInfo.feedback) {
                doc.text('মতামত:', 25, yPos);
                yPos += 7;
                const feedbackLines = doc.splitTextToSize(websiteInfo.feedback, 160);
                feedbackLines.forEach(line => {
                    doc.text(line, 30, yPos);
                    yPos += 7;
                });
            }
            
            // Footer
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text('এই ফর্মটি "আমরা এখন বিশ্ব দেখব" ওয়েবসাইটের জন্য তৈরি করা হয়েছে।', 105, 280, { align: 'center' });
            doc.text('তথ্য গোপন রাখা হবে এবং শুধুমাত্র ভ্রমণ পরিষেবার জন্য ব্যবহৃত হবে।', 105, 285, { align: 'center' });
            
            // Save PDF
            const fileName = `travel-data-${Date.now()}.pdf`;
            doc.save(fileName);
            
            // Reset button
            downloadBtn.innerHTML = '<i class="fas fa-download"></i> ডাউনলোড PDF';
            downloadBtn.disabled = false;
            
            // Show success message
            showNotification('PDF ডাউনলোড সফল হয়েছে!', 'success');
            
            // Share functionality
            if (navigator.share) {
                setTimeout(() => {
                    if (confirm('আপনি কি এই PDF শেয়ার করতে চান?')) {
                        sharePDF(doc, fileName);
                    }
                }, 1000);
            }
            
        } catch (error) {
            console.error('PDF generation error:', error);
            showNotification('PDF তৈরিতে সমস্যা হয়েছে', 'error');
            
            // Reset button
            downloadBtn.innerHTML = '<i class="fas fa-download"></i> ডাউনলোড PDF';
            downloadBtn.disabled = false;
        }
    }
    
    // Share PDF
    async function sharePDF(doc, fileName) {
        try {
            // Create blob from PDF
            const pdfBlob = doc.output('blob');
            
            // Create file from blob
            const file = new File([pdfBlob], fileName, { type: 'application/pdf' });
            
            // Share using Web Share API
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'আমার ভ্রমণ ডাটা',
                    text: 'আমার ভ্রমণ তথ্য দেখুন'
                });
                showNotification('PDF শেয়ার সফল হয়েছে!', 'success');
            }
        } catch (error) {
            console.error('Sharing failed:', error);
            // Sharing not supported or cancelled
        }
    }
    
    // Clear form data
    window.clearFormData = function() {
        if (confirm('আপনি কি নিশ্চিত যে আপনি সকল ডাটা মুছতে চান?')) {
            localStorage.removeItem('travelFormData');
            travelForm.reset();
            downloadBtn.disabled = true;
            downloadBtn.classList.remove('hover-pulse');
            
            // Clear image preview
            const imagePreview = document.getElementById('imagePreview');
            if (imagePreview) {
                imagePreview.innerHTML = '';
            }
            
            // Clear rating
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.classList.remove('active');
            });
            
            showNotification('সকল ডাটা মুছে ফেলা হয়েছে', 'info');
        }
    };
    
    // Export data as JSON
    window.exportData = function() {
        const savedData = localStorage.getItem('travelFormData');
        if (!savedData) {
            showNotification('কোন ডাটা নেই এক্সপোর্ট করার জন্য', 'error');
            return;
        }
        
        const dataStr = JSON.stringify(JSON.parse(savedData), null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `travel-data-${Date.now()}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showNotification('ডাটা JSON হিসেবে ডাউনলোড হয়েছে', 'success');
    };
    
    // Add clear and export buttons
    function addUtilityButtons() {
        const formActions = document.querySelector('.form-actions');
        if (!formActions) return;
        
        const utilityDiv = document.createElement('div');
        utilityDiv.className = 'utility-buttons';
        utilityDiv.style.cssText = `
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
            flex-wrap: wrap;
        `;
        
        utilityDiv.innerHTML = `
            <button class="btn clear-btn" onclick="clearFormData()">
                <i class="fas fa-trash"></i> ডাটা মুছুন
            </button>
            <button class="btn export-btn" onclick="exportData()">
                <i class="fas fa-file-export"></i> JSON এক্সপোর্ট
            </button>
            <button class="btn print-btn" onclick="window.print()">
                <i class="fas fa-print"></i> প্রিন্ট করুন
            </button>
        `;
        
        formActions.parentNode.insertBefore(utilityDiv, formActions.nextSibling);
        
        // Add styles for utility buttons
        const style = document.createElement('style');
        style.textContent = `
            .clear-btn {
                background: #e74c3c !important;
                color: white !important;
            }
            
            .export-btn {
                background: #9b59b6 !important;
                color: white !important;
            }
            
            .print-btn {
                background: #34495e !important;
                color: white !important;
            }
            
            @media print {
                .utility-buttons {
                    display: none !important;
                }
                
                .form-actions {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize utility buttons
    addUtilityButtons();
    
    // Form auto-save (optional)
    let autoSaveTimeout;
    function setupAutoSave() {
        const formInputs = travelForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                clearTimeout(autoSaveTimeout);
                autoSaveTimeout = setTimeout(() => {
                    const formData = collectFormData();
                    localStorage.setItem('travelFormAutoSave', JSON.stringify(formData));
                }, 2000);
            });
        });
    }
    
    // Load auto-saved data if exists
    const autoSavedData = localStorage.getItem('travelFormAutoSave');
    if (autoSavedData && travelForm) {
        try {
            const formData = JSON.parse(autoSavedData);
            populateForm(formData);
            showNotification('অটো-সেভ ডাটা লোড করা হয়েছে', 'info');
        } catch (e) {
            console.error('Error loading auto-saved data:', e);
        }
    }
    
    // Setup auto-save
    if (travelForm) {
        setupAutoSave();
    }
});

// Collect form data function (also used in main.js)
function collectFormData() {
    const formData = {
        personalInfo: {
            fullName: document.getElementById('fullName')?.value,
            username: document.getElementById('username')?.value,
            email: document.getElementById('email')?.value,
            mobile: document.getElementById('mobile')?.value,
            altMobile: document.getElementById('altMobile')?.value,
            dob: document.getElementById('dob')?.value,
            age: document.getElementById('age')?.value,
            gender: document.getElementById('gender')?.value,
            nationality: document.getElementById('nationality')?.value
        },
        locationDetails: {
            country: document.getElementById('country')?.value,
            division: document.getElementById('division')?.value,
            district: document.getElementById('district')?.value,
            upazila: document.getElementById('upazila')?.value,
            postCode: document.getElementById('postCode')?.value,
            fullAddress: document.getElementById('fullAddress')?.value,
            currentCity: document.getElementById('currentCity')?.value
        },
        educationInfo: {
            education: document.getElementById('education')?.value,
            profession: document.getElementById('profession')?.value,
            company: document.getElementById('company')?.value,
            skills: document.getElementById('skills')?.value,
            experience: document.getElementById('experience')?.value,
            interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
            visitPurpose: document.getElementById('visitPurpose')?.value
        },
        websiteInfo: {
            source: document.getElementById('source')?.value,
            visitedBefore: document.getElementById('visitedBefore')?.value,
            rating: document.getElementById('ratingValue')?.value,
            serviceInterest: document.getElementById('serviceInterest')?.value,
            feedback: document.getElementById('feedback')?.value,
            updates: document.getElementById('updates')?.value
        },
        timestamp: new Date().toISOString()
    };
    
    return formData;
}

// Notification function (also used in main.js)
function showNotification(message, type = 'info') {
    // Implementation from main.js
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem 1rem 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    
    const colors = {
        success: { bg: '#d4edda', color: '#155724', border: '#c3e6cb' },
        error: { bg: '#f8d7da', color: '#721c24', border: '#f5c6cb' },
        info: { bg: '#d1ecf1', color: '#0c5460', border: '#bee5eb' }
    };
    
    const colorSet = colors[type] || colors.info;
    notification.style.backgroundColor = colorSet.bg;
    notification.style.color = colorSet.color;
    notification.style.borderLeft = `4px solid ${colorSet.border}`;
    
    document.body.appendChild(notification);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: inherit;
        margin-left: 1rem;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}