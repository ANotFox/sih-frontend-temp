export type Language = 'en' | 'hi' | 'ml' | 'raj';

export interface TranslationStrings {
  // Header/Navigation
  'app.title': string;
  'nav.dashboard': string;
  'nav.upload': string;
  'nav.results': string;
  'nav.history': string;
  
  // Dashboard
  'dashboard.title': string;
  'dashboard.description': string;
  'dashboard.newClassification': string;
  'dashboard.newClassificationDesc': string;
  'dashboard.viewHistory': string;
  'dashboard.viewHistoryDesc': string;
  'dashboard.recentClassifications': string;
  'dashboard.noClassifications': string;
  'dashboard.uploadImage': string;
  'dashboard.viewRecords': string;
  'dashboard.score': string;
  
  // Upload
  'upload.title': string;
  'upload.description': string;
  'upload.uploadPrompt': string;
  'upload.dragDropPrompt': string;
  'upload.chooseFile': string;
  'upload.takePhoto': string;
  'upload.submitAnalysis': string;
  'upload.clear': string;
  'upload.analyzing': string;
  'upload.analyzeWait': string;
  'upload.bestResults': string;
  'upload.standing': string;
  'upload.fullBody': string;
  'upload.goodLighting': string;
  'upload.avoidBlurry': string;
  
  // Results
  'results.title': string;
  'results.description': string;
  'results.analyzedImage': string;
  'results.classificationScore': string;
  'results.measurements': string;
  'results.heightAtWithers': string;
  'results.bodyLength': string;
  'results.rumpAngle': string;
  'results.bodyConditionScore': string;
  'results.estimatedWeight': string;
  'results.saveRecord': string;
  'results.newAnalysis': string;
  'results.noResults': string;
  'results.uploadFirst': string;
  'results.errorMessage': string;
  'results.tryAgain': string;
  
  // History
  'history.title': string;
  'history.description': string;
  'history.allTypes': string;
  'history.dairyCow': string;
  'history.beefCattle': string;
  'history.buffalo': string;
  'history.last7Days': string;
  'history.last30Days': string;
  'history.last90Days': string;
  'history.allTime': string;
  'history.exportData': string;
  'history.loadMore': string;
  'history.viewDetails': string;
  'history.noRecords': string;
  'history.noMatches': string;
  'history.errorLoading': string;
  
  // Common
  'common.loading': string;
  'common.error': string;
  'common.success': string;
  'common.cancel': string;
  'common.save': string;
  'common.delete': string;
  'common.cm': string;
  'common.kg': string;
  'common.degrees': string;
  
  // Toast messages
  'toast.analysisComplete': string;
  'toast.analysisCompleteDesc': string;
  'toast.analysisFailed': string;
  'toast.analysisFailedDesc': string;
  'toast.invalidFile': string;
  'toast.invalidFileDesc': string;
  'toast.cameraFeature': string;
  'toast.cameraFeatureDesc': string;
  'toast.saveError': string;
  'toast.saveErrorDesc': string;
}

export const translations: Record<Language, TranslationStrings> = {
  en: {
    // Header/Navigation
    'app.title': 'AI-ATC System',
    'nav.dashboard': 'Dashboard',
    'nav.upload': 'Upload',
    'nav.results': 'Results',
    'nav.history': 'History',
    
    // Dashboard
    'dashboard.title': 'Animal Type Classification System',
    'dashboard.description': 'Welcome to the AI-powered Animal Type Classification system. Upload images of cattle and buffaloes to get instant analysis with detailed measurements and classification scores.',
    'dashboard.newClassification': 'New Classification',
    'dashboard.newClassificationDesc': 'Start a new animal classification by uploading an image.',
    'dashboard.viewHistory': 'View History',
    'dashboard.viewHistoryDesc': 'Review past classifications and export data.',
    'dashboard.recentClassifications': 'Recent Classifications',
    'dashboard.noClassifications': 'No classifications yet. Start by uploading your first image!',
    'dashboard.uploadImage': 'Upload Image',
    'dashboard.viewRecords': 'View Records',
    'dashboard.score': 'Score',
    
    // Upload
    'upload.title': 'Upload Animal Image',
    'upload.description': 'Take a clear photo of the animal or upload from your device. Ensure the full body is visible for accurate analysis.',
    'upload.uploadPrompt': 'Upload Image or Take Photo',
    'upload.dragDropPrompt': 'Drag and drop an image here, or click to select',
    'upload.chooseFile': 'Choose File',
    'upload.takePhoto': 'Take Photo',
    'upload.submitAnalysis': 'Submit for Analysis',
    'upload.clear': 'Clear',
    'upload.analyzing': 'Analyzing image...',
    'upload.analyzeWait': 'Please wait while our AI processes the image',
    'upload.bestResults': 'For best results:',
    'upload.standing': 'Ensure the animal is standing upright',
    'upload.fullBody': 'Capture the full body from a side view',
    'upload.goodLighting': 'Use good lighting conditions',
    'upload.avoidBlurry': 'Avoid blurry or distorted images',
    
    // Results
    'results.title': 'Classification Results',
    'results.description': 'Analysis complete. Review the measurements and classification score below.',
    'results.analyzedImage': 'Analyzed Image',
    'results.classificationScore': 'Classification Score',
    'results.measurements': 'Measurements',
    'results.heightAtWithers': 'Height at Withers',
    'results.bodyLength': 'Body Length',
    'results.rumpAngle': 'Rump Angle',
    'results.bodyConditionScore': 'Body Condition Score',
    'results.estimatedWeight': 'Estimated Weight',
    'results.saveRecord': 'Save Record',
    'results.newAnalysis': 'New Analysis',
    'results.noResults': 'No analysis results to display. Please upload an image first.',
    'results.uploadFirst': 'Upload Image',
    'results.errorMessage': 'Failed to load analysis results. Please try again.',
    'results.tryAgain': 'Try Again',
    
    // History
    'history.title': 'Classification History',
    'history.description': 'View and manage all past animal classifications. Export data or review individual records.',
    'history.allTypes': 'All Types',
    'history.dairyCow': 'Dairy Cow',
    'history.beefCattle': 'Beef Cattle',
    'history.buffalo': 'Buffalo',
    'history.last7Days': 'Last 7 days',
    'history.last30Days': 'Last 30 days',
    'history.last90Days': 'Last 90 days',
    'history.allTime': 'All time',
    'history.exportData': 'Export Data',
    'history.loadMore': 'Load More Records',
    'history.viewDetails': 'View Details',
    'history.noRecords': 'No classifications yet. Start by uploading your first image!',
    'history.noMatches': 'No records match the selected filters. Try adjusting your search criteria.',
    'history.errorLoading': 'Failed to load classification history. Please try again.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.cm': 'cm',
    'common.kg': 'kg',
    'common.degrees': '°',
    
    // Toast messages
    'toast.analysisComplete': 'Analysis Complete',
    'toast.analysisCompleteDesc': 'Your image has been successfully analyzed.',
    'toast.analysisFailed': 'Analysis Failed',
    'toast.analysisFailedDesc': 'Failed to analyze the image. Please try again.',
    'toast.invalidFile': 'Invalid File',
    'toast.invalidFileDesc': 'Please select an image file',
    'toast.cameraFeature': 'Camera Feature',
    'toast.cameraFeatureDesc': 'Camera functionality would be implemented here for mobile devices',
    'toast.saveError': 'Error',
    'toast.saveErrorDesc': 'Failed to save analysis results',
  },
  
  hi: {
    // Header/Navigation
    'app.title': 'AI-ATC सिस्टम',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.upload': 'अपलोड',
    'nav.results': 'परिणाम',
    'nav.history': 'इतिहास',
    
    // Dashboard
    'dashboard.title': 'पशु प्रकार वर्गीकरण प्रणाली',
    'dashboard.description': 'AI-संचालित पशु प्रकार वर्गीकरण प्रणाली में आपका स्वागत है। विस्तृत माप और वर्गीकरण स्कोर के साथ तत्काल विश्लेषण प्राप्त करने के लिए मवेशियों और भैंसों की छवियां अपलोड करें।',
    'dashboard.newClassification': 'नया वर्गीकरण',
    'dashboard.newClassificationDesc': 'एक छवि अपलोड करके एक नया पशु वर्गीकरण शुरू करें।',
    'dashboard.viewHistory': 'इतिहास देखें',
    'dashboard.viewHistoryDesc': 'पिछले वर्गीकरणों की समीक्षा करें और डेटा निर्यात करें।',
    'dashboard.recentClassifications': 'हाल के वर्गीकरण',
    'dashboard.noClassifications': 'अभी तक कोई वर्गीकरण नहीं। अपनी पहली छवि अपलोड करके शुरुआत करें!',
    'dashboard.uploadImage': 'छवि अपलोड करें',
    'dashboard.viewRecords': 'रिकॉर्ड देखें',
    'dashboard.score': 'स्कोर',
    
    // Upload
    'upload.title': 'पशु छवि अपलोड करें',
    'upload.description': 'पशु की एक स्पष्ट तस्वीर लें या अपने डिवाइस से अपलोड करें। सटीक विश्लेषण के लिए सुनिश्चित करें कि पूरा शरीर दिखाई दे।',
    'upload.uploadPrompt': 'छवि अपलोड करें या फोटो लें',
    'upload.dragDropPrompt': 'यहाँ एक छवि खींचें और छोड़ें, या चुनने के लिए क्लिक करें',
    'upload.chooseFile': 'फ़ाइल चुनें',
    'upload.takePhoto': 'फोटो लें',
    'upload.submitAnalysis': 'विश्लेषण के लिए सबमिट करें',
    'upload.clear': 'साफ़ करें',
    'upload.analyzing': 'छवि का विश्लेषण कर रहे हैं...',
    'upload.analyzeWait': 'कृपया प्रतीक्षा करें जबकि हमारा AI छवि को प्रोसेस करता है',
    'upload.bestResults': 'सर्वोत्तम परिणामों के लिए:',
    'upload.standing': 'सुनिश्चित करें कि पशु सीधा खड़ा है',
    'upload.fullBody': 'एक तरफ से पूरे शरीर को कैप्चर करें',
    'upload.goodLighting': 'अच्छी रोशनी की स्थिति का उपयोग करें',
    'upload.avoidBlurry': 'धुंधली या विकृत छवियों से बचें',
    
    // Results
    'results.title': 'वर्गीकरण परिणाम',
    'results.description': 'विश्लेषण पूर्ण। नीचे माप और वर्गीकरण स्कोर की समीक्षा करें।',
    'results.analyzedImage': 'विश्लेषित छवि',
    'results.classificationScore': 'वर्गीकरण स्कोर',
    'results.measurements': 'माप',
    'results.heightAtWithers': 'कंधे की ऊंचाई',
    'results.bodyLength': 'शरीर की लंबाई',
    'results.rumpAngle': 'कूल्हे का कोण',
    'results.bodyConditionScore': 'शरीर स्थिति स्कोर',
    'results.estimatedWeight': 'अनुमानित वजन',
    'results.saveRecord': 'रिकॉर्ड सहेजें',
    'results.newAnalysis': 'नया विश्लेषण',
    'results.noResults': 'प्रदर्शित करने के लिए कोई विश्लेषण परिणाम नहीं। कृपया पहले एक छवि अपलोड करें।',
    'results.uploadFirst': 'छवि अपलोड करें',
    'results.errorMessage': 'विश्लेषण परिणाम लोड करने में विफल। कृपया पुनः प्रयास करें।',
    'results.tryAgain': 'पुनः प्रयास करें',
    
    // History
    'history.title': 'वर्गीकरण इतिहास',
    'history.description': 'सभी पिछले पशु वर्गीकरणों को देखें और प्रबंधित करें। डेटा निर्यात करें या व्यक्तिगत रिकॉर्ड की समीक्षा करें।',
    'history.allTypes': 'सभी प्रकार',
    'history.dairyCow': 'डेयरी गाय',
    'history.beefCattle': 'मांस पशु',
    'history.buffalo': 'भैंस',
    'history.last7Days': 'पिछले 7 दिन',
    'history.last30Days': 'पिछले 30 दिन',
    'history.last90Days': 'पिछले 90 दिन',
    'history.allTime': 'सभी समय',
    'history.exportData': 'डेटा निर्यात करें',
    'history.loadMore': 'अधिक रिकॉर्ड लोड करें',
    'history.viewDetails': 'विवरण देखें',
    'history.noRecords': 'अभी तक कोई वर्गीकरण नहीं। अपनी पहली छवि अपलोड करके शुरुआत करें!',
    'history.noMatches': 'कोई रिकॉर्ड चयनित फ़िल्टर से मेल नहीं खाता। अपने खोज मापदंड को समायोजित करने का प्रयास करें।',
    'history.errorLoading': 'वर्गीकरण इतिहास लोड करने में विफल। कृपया पुनः प्रयास करें।',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफल',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.delete': 'हटाएं',
    'common.cm': 'सेमी',
    'common.kg': 'किग्रा',
    'common.degrees': '°',
    
    // Toast messages
    'toast.analysisComplete': 'विश्लेषण पूर्ण',
    'toast.analysisCompleteDesc': 'आपकी छवि का सफलतापूर्वक विश्लेषण हो गया है।',
    'toast.analysisFailed': 'विश्लेषण विफल',
    'toast.analysisFailedDesc': 'छवि का विश्लेषण करने में विफल। कृपया पुनः प्रयास करें।',
    'toast.invalidFile': 'अमान्य फ़ाइल',
    'toast.invalidFileDesc': 'कृपया एक छवि फ़ाइल चुनें',
    'toast.cameraFeature': 'कैमरा सुविधा',
    'toast.cameraFeatureDesc': 'मोबाइल डिवाइस के लिए कैमरा कार्यक्षमता यहाँ लागू की जाएगी',
    'toast.saveError': 'त्रुटि',
    'toast.saveErrorDesc': 'विश्लेषण परिणाम सहेजने में विफल',
  },
  
  ml: {
    // Header/Navigation
    'app.title': 'AI-ATC സിസ്റ്റം',
    'nav.dashboard': 'ഡാഷ്‌ബോർഡ്',
    'nav.upload': 'അപ്‌ലോഡ്',
    'nav.results': 'ഫലങ്ങൾ',
    'nav.history': 'ചരിത്രം',
    
    // Dashboard
    'dashboard.title': 'മൃഗങ്ങളുടെ വിഭാഗീകരണ സംവിധാനം',
    'dashboard.description': 'AI-പവർഡ് മൃഗങ്ങളുടെ വിഭാഗീകരണ സംവിധാനത്തിലേക്ക് സ്വാഗതം. വിശദമായ അളവുകളും വർഗ്ഗീകരണ സ്കോറുകളും ഉള്ള തൽക്ഷണ വിശകലനം നേടുന്നതിന് കന്നുകാലികളുടെയും എരുമകളുടെയും ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്യുക.',
    'dashboard.newClassification': 'പുതിയ വർഗ്ഗീകരണം',
    'dashboard.newClassificationDesc': 'ഒരു ചിത്രം അപ്‌ലോഡ് ചെയ്‌ത് പുതിയ മൃഗ വർഗ്ഗീകരണം ആരംഭിക്കുക.',
    'dashboard.viewHistory': 'ചരിത്രം കാണുക',
    'dashboard.viewHistoryDesc': 'മുൻകാല വർഗ്ഗീകരണങ്ങൾ അവലോകനം ചെയ്‌ത് ഡാറ്റ എക്‌സ്‌പോർട്ട് ചെയ്യുക.',
    'dashboard.recentClassifications': 'സമീപകാല വർഗ്ഗീകരണങ്ങൾ',
    'dashboard.noClassifications': 'ഇതുവരെ വർഗ്ഗീകരണങ്ങളൊന്നുമില്ല. നിങ്ങളുടെ ആദ്യ ചിത്രം അപ്‌ലോഡ് ചെയ്‌ത് ആരംഭിക്കുക!',
    'dashboard.uploadImage': 'ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    'dashboard.viewRecords': 'രേഖകൾ കാണുക',
    'dashboard.score': 'സ്കോർ',
    
    // Upload
    'upload.title': 'മൃഗത്തിന്റെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    'upload.description': 'മൃഗത്തിന്റെ വ്യക്തമായ ഫോട്ടോ എടുക്കുക അല്ലെങ്കിൽ നിങ്ങളുടെ ഉപകരണത്തിൽ നിന്ന് അപ്‌ലോഡ് ചെയ്യുക. കൃത്യമായ വിശകലനത്തിനായി മുഴുവൻ ശരീരവും ദൃശ്യമാണെന്ന് ഉറപ്പുവരുത്തുക.',
    'upload.uploadPrompt': 'ചിത്രം അപ്‌ലോഡ് ചെയ്യുക അല്ലെങ്കിൽ ഫോട്ടോ എടുക്കുക',
    'upload.dragDropPrompt': 'ഇവിടെ ഒരു ചിത്രം വലിച്ചിട്ടുക, അല്ലെങ്കിൽ തിരഞ്ഞെടുക്കാൻ ക്ലിക്ക് ചെയ്യുക',
    'upload.chooseFile': 'ഫയൽ തിരഞ്ഞെടുക്കുക',
    'upload.takePhoto': 'ഫോട്ടോ എടുക്കുക',
    'upload.submitAnalysis': 'വിശകലനത്തിനായി സമർപ്പിക്കുക',
    'upload.clear': 'മായ്ക്കുക',
    'upload.analyzing': 'ചിത്രം വിശകലനം ചെയ്യുന്നു...',
    'upload.analyzeWait': 'ഞങ്ങളുടെ AI ചിത്രം പ്രോസസ്സ് ചെയ്യുമ്പോൾ കാത്തിരിക്കുക',
    'upload.bestResults': 'മികച്ച ഫലങ്ങൾക്ക്:',
    'upload.standing': 'മൃഗം നിവർന്നു നിൽക്കുന്നുവെന്ന് ഉറപ്പുവരുത്തുക',
    'upload.fullBody': 'വശത്തു നിന്ന് മുഴുവൻ ശരീരവും പിടിക്കുക',
    'upload.goodLighting': 'നല്ല വെളിച്ചത്തിന്റെ അവസ്ഥകൾ ഉപയോഗിക്കുക',
    'upload.avoidBlurry': 'അവ്യക്തമോ വികൃതമോ ആയ ചിത്രങ്ങൾ ഒഴിവാക്കുക',
    
    // Results
    'results.title': 'വർഗ്ഗീകരണ ഫലങ്ങൾ',
    'results.description': 'വിശകലനം പൂർത്തിയായി. താഴെയുള്ള അളവുകളും വർഗ്ഗീകരണ സ്കോറും അവലോകനം ചെയ്യുക.',
    'results.analyzedImage': 'വിശകലനം ചെയ്ത ചിത്രം',
    'results.classificationScore': 'വർഗ്ഗീകരണ സ്കോർ',
    'results.measurements': 'അളവുകൾ',
    'results.heightAtWithers': 'തോളിലെ ഉയരം',
    'results.bodyLength': 'ശരീര നീളം',
    'results.rumpAngle': 'കടിപ്പിടി കോൺ',
    'results.bodyConditionScore': 'ശരീര അവസ്ഥ സ്കോർ',
    'results.estimatedWeight': 'കണക്കാക്കിയ ഭാരം',
    'results.saveRecord': 'രേഖ സംരക്ഷിക്കുക',
    'results.newAnalysis': 'പുതിയ വിശകലനം',
    'results.noResults': 'പ്രദർശിപ്പിക്കാൻ വിശകലന ഫലങ്ങളൊന്നുമില്ല. ആദ്യം ഒരു ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.',
    'results.uploadFirst': 'ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    'results.errorMessage': 'വിശകലന ഫലങ്ങൾ ലോഡ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. വീണ്ടും ശ്രമിക്കുക.',
    'results.tryAgain': 'വീണ്ടും ശ്രമിക്കുക',
    
    // History
    'history.title': 'വർഗ്ഗീകരണ ചരിത്രം',
    'history.description': 'എല്ലാ മുൻകാല മൃഗ വർഗ്ഗീകരണങ്ങളും കാണുകയും നിയന്ത്രിക്കുകയും ചെയ്യുക. ഡാറ്റ എക്‌സ്‌പോർട്ട് ചെയ്യുക അല്ലെങ്കിൽ വ്യക്തിഗത രേഖകൾ അവലോകനം ചെയ്യുക.',
    'history.allTypes': 'എല്ലാ തരങ്ങളും',
    'history.dairyCow': 'പാൽ പശു',
    'history.beefCattle': 'മാംസ കന്നുകാലി',
    'history.buffalo': 'എരുമ',
    'history.last7Days': 'കഴിഞ്ഞ 7 ദിവസം',
    'history.last30Days': 'കഴിഞ്ഞ 30 ദിവസം',
    'history.last90Days': 'കഴിഞ്ഞ 90 ദിവസം',
    'history.allTime': 'എല്ലാ സമയവും',
    'history.exportData': 'ഡാറ്റ എക്‌സ്‌പോർട്ട് ചെയ്യുക',
    'history.loadMore': 'കൂടുതൽ രേഖകൾ ലോഡ് ചെയ്യുക',
    'history.viewDetails': 'വിശദാംശങ്ങൾ കാണുക',
    'history.noRecords': 'ഇതുവരെ വർഗ്ഗീകരണങ്ങളൊന്നുമില്ല. നിങ്ങളുടെ ആദ്യ ചിത്രം അപ്‌ലോഡ് ചെയ്‌ത് ആരംഭിക്കുക!',
    'history.noMatches': 'തിരഞ്ഞെടുത്ത ഫിൽട്ടറുകളുമായി ഒരു രേഖയും പൊരുത്തപ്പെടുന്നില്ല. നിങ്ങളുടെ തിരയൽ മാനദണ്ഡങ്ങൾ ക്രമീകരിക്കാൻ ശ്രമിക്കുക.',
    'history.errorLoading': 'വർഗ്ഗീകരണ ചരിത്രം ലോഡ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. വീണ്ടും ശ്രമിക്കുക.',
    
    // Common
    'common.loading': 'ലോഡ് ചെയ്യുന്നു...',
    'common.error': 'പിശക്',
    'common.success': 'വിജയം',
    'common.cancel': 'റദ്ദാക്കുക',
    'common.save': 'സംരക്ഷിക്കുക',
    'common.delete': 'ഇല്ലാതാക്കുക',
    'common.cm': 'സെമി',
    'common.kg': 'കിലോ',
    'common.degrees': '°',
    
    // Toast messages
    'toast.analysisComplete': 'വിശകലനം പൂർത്തിയായി',
    'toast.analysisCompleteDesc': 'നിങ്ങളുടെ ചിത്രം വിജയകരമായി വിശകലനം ചെയ്തു.',
    'toast.analysisFailed': 'വിശകലനം പരാജയപ്പെട്ടു',
    'toast.analysisFailedDesc': 'ചിത്രം വിശകലനം ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. വീണ്ടും ശ്രമിക്കുക.',
    'toast.invalidFile': 'അസാധുവായ ഫയൽ',
    'toast.invalidFileDesc': 'ദയവായി ഒരു ചിത്ര ഫയൽ തിരഞ്ഞെടുക്കുക',
    'toast.cameraFeature': 'ക്യാമറ സവിശേഷത',
    'toast.cameraFeatureDesc': 'മൊബൈൽ ഉപകരണങ്ങൾക്കായി ക്യാമറ പ്രവർത്തനം ഇവിടെ നടപ്പിലാക്കും',
    'toast.saveError': 'പിശക്',
    'toast.saveErrorDesc': 'വിശകലന ഫലങ്ങൾ സംരക്ഷിക്കുന്നതിൽ പരാജയപ്പെട്ടു',
  },
  
  raj: {
    // Header/Navigation
    'app.title': 'AI-ATC सिस्टम',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.upload': 'अपलोड',
    'nav.results': 'नतीजा',
    'nav.history': 'इतिहास',
    
    // Dashboard
    'dashboard.title': 'जानवर जाति वर्गीकरण प्रणाली',
    'dashboard.description': 'AI-चालित जानवर जाति वर्गीकरण प्रणाली में राम राम। गायां अर बैंसों की तस्वीरां अपलोड करो अर विस्तृत माप अर वर्गीकरण स्कोर के साथ तुरंत विश्लेषण पाओ।',
    'dashboard.newClassification': 'नवो वर्गीकरण',
    'dashboard.newClassificationDesc': 'एक तस्वीर अपलोड करर नवो जानवर वर्गीकरण शुरू करो।',
    'dashboard.viewHistory': 'इतिहास देखो',
    'dashboard.viewHistoryDesc': 'पुराने वर्गीकरणां री समीक्षा करो अर डेटा निर्यात करो।',
    'dashboard.recentClassifications': 'हाल के वर्गीकरण',
    'dashboard.noClassifications': 'अजै तक कोई वर्गीकरण कोनी। आपरी पैली तस्वीर अपलोड करर शुरुआत करो!',
    'dashboard.uploadImage': 'तस्वीर अपलोड करो',
    'dashboard.viewRecords': 'रिकॉर्ड देखो',
    'dashboard.score': 'स्कोर',
    
    // Upload
    'upload.title': 'जानवर री तस्वीर अपलोड करो',
    'upload.description': 'जानवर री साफ तस्वीर खींचो या आपने यंत्र सूं अपलोड करो। सही विश्लेषण के लिए पूरो शरीर दिखावे।',
    'upload.uploadPrompt': 'तस्वीर अपलोड करो या फोटो खींचो',
    'upload.dragDropPrompt': 'इठै एक तस्वीर खींचो अर छोड़ो, या चुनने के लिए क्लिक करो',
    'upload.chooseFile': 'फाइल चुनो',
    'upload.takePhoto': 'फोटो खींचो',
    'upload.submitAnalysis': 'विश्लेषण के लिए भेजो',
    'upload.clear': 'साफ करो',
    'upload.analyzing': 'तस्वीर रो विश्लेषण करर्या हां...',
    'upload.analyzeWait': 'म्हारो AI तस्वीर प्रोसेस करै री बेला तक इंतजार करो',
    'upload.bestResults': 'बेहतरीन नतीजां के लिए:',
    'upload.standing': 'जानवर सीधो खड़ो है, यो पक्को करो',
    'upload.fullBody': 'एक तरफ सूं पूरो शरीर कैप्चर करो',
    'upload.goodLighting': 'अच्छी रोशनी री स्थिति रो उपयोग करो',
    'upload.avoidBlurry': 'धुंधली या बिगड़ी तस्वीरां सूं बचो',
    
    // Results
    'results.title': 'वर्गीकरण रा नतीजा',
    'results.description': 'विश्लेषण पूरो। नीचे माप अर वर्गीकरण स्कोर री समीक्षा करो।',
    'results.analyzedImage': 'विश्लेषित तस्वीर',
    'results.classificationScore': 'वर्गीकरण स्कोर',
    'results.measurements': 'माप',
    'results.heightAtWithers': 'कंधे री ऊंचाई',
    'results.bodyLength': 'शरीर री लंबाई',
    'results.rumpAngle': 'पिछवाड़े रो कोण',
    'results.bodyConditionScore': 'शरीर स्थिति स्कोर',
    'results.estimatedWeight': 'अनुमानित वजन',
    'results.saveRecord': 'रिकॉर्ड बचाओ',
    'results.newAnalysis': 'नवो विश्लेषण',
    'results.noResults': 'दिखाने के लिए कोई विश्लेषण नतीजा कोनी। पैले एक तस्वीर अपलोड करो।',
    'results.uploadFirst': 'तस्वीर अपलोड करो',
    'results.errorMessage': 'विश्लेषण नतीजा लोड करने में नाकाम। दुबारो कोशिश करो।',
    'results.tryAgain': 'दुबारो कोशिश करो',
    
    // History
    'history.title': 'वर्गीकरण इतिहास',
    'history.description': 'सारे पुराने जानवर वर्गीकरणां नै देखो अर संभालो। डेटा निर्यात करो या व्यक्तिगत रिकॉर्ड री समीक्षा करो।',
    'history.allTypes': 'सारी किस्म',
    'history.dairyCow': 'दूध वाली गाय',
    'history.beefCattle': 'मांस वाले पशु',
    'history.buffalo': 'भैंस',
    'history.last7Days': 'पिछले 7 दिन',
    'history.last30Days': 'पिछले 30 दिन',
    'history.last90Days': 'पिछले 90 दिन',
    'history.allTime': 'सारो वक्त',
    'history.exportData': 'डेटा निर्यात करो',
    'history.loadMore': 'ज्यादा रिकॉर्ड लोड करो',
    'history.viewDetails': 'विवरण देखो',
    'history.noRecords': 'अजै तक कोई वर्गीकरण कोनी। आपरी पैली तस्वीर अपलोड करर शुरुआत करो!',
    'history.noMatches': 'कोई रिकॉर्ड चुने गए फिल्टर सूं मेल कोनी खावे। आपरे खोज मापदंड नै बदलने री कोशिश करो।',
    'history.errorLoading': 'वर्गीकरण इतिहास लोड करने में नाकाम। दुबारो कोशिश करो।',
    
    // Common
    'common.loading': 'लोड होर्यो है...',
    'common.error': 'गलती',
    'common.success': 'सफल',
    'common.cancel': 'रद्द करो',
    'common.save': 'बचाओ',
    'common.delete': 'मिटाओ',
    'common.cm': 'सेमी',
    'common.kg': 'किलो',
    'common.degrees': '°',
    
    // Toast messages
    'toast.analysisComplete': 'विश्लेषण पूरो',
    'toast.analysisCompleteDesc': 'आपरी तस्वीर रो सफलतापूर्वक विश्लेषण होगो है।',
    'toast.analysisFailed': 'विश्लेषण नाकाम',
    'toast.analysisFailedDesc': 'तस्वीर रो विश्लेषण करने में नाकाम। दुबारो कोशिश करो।',
    'toast.invalidFile': 'गलत फाइल',
    'toast.invalidFileDesc': 'एक तस्वीर फाइल चुनो',
    'toast.cameraFeature': 'कैमरा सुविधा',
    'toast.cameraFeatureDesc': 'मोबाइल यंत्रां के लिए कैमरा काम इठै लागू करी जावेगी',
    'toast.saveError': 'गलती',
    'toast.saveErrorDesc': 'विश्लेषण नतीजा बचाने में नाकाम',
  },
};

export const getLanguageName = (language: Language): string => {
  const names = {
    en: 'English',
    hi: 'हिन्दी',
    ml: 'മലയാളം',
    raj: 'राजस्थानी',
  };
  return names[language];
};