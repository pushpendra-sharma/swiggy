import { HELP } from './types';

export const TITLE = 'Swiggy';

export const CITIES = ['Noida'];

export const BASE_URL = 'https://swiggy-api.onrender.com';

export const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const GET_ALL_RESTAURANT_URL =
  '/api/restaurants/list?lat=28.52572220267605&lng=77.39057801663876&page_type=DESKTOP_WEB_LISTING';

export const GET_RESTAURANT_DETAIL_URL =
  '/api/restaurants/menu?lat=28.52572220267605&lng=77.39057801663876&menuId=';

export const SEARCH_URL = `/api/restaurants/search/suggest?lat=28.5770877&lng=77.3417748&str=`;

export const HELP_DATA: HELP = {
  data: {
    'Partner Onboarding': [
      {
        id: '001',
        title:
          'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?',
        description:
          'After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.',
      },
      {
        id: '002',
        title:
          'What is this one time Onboarding fees? Do I have to pay for it while registering?',
        description:
          'This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.',
      },
      {
        id: '003',
        title:
          'Who should I contact if I need help & support in getting onboarded?',
        description:
          'You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in',
      },
      {
        id: '004',
        title: 'How much commission will I be charged by Swiggy?',
        description:
          'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      },
      {
        id: '005',
        title:
          'I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?',
        description:
          'FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.',
      },
    ],
    Legal: [
      {
        id: '006',
        title: 'Terms of Use',
        description:
          'These terms of use (the "Terms of Use") govern your use of our website www.swiggy.in (the "Website") and our "Swiggy" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.',
      },
      {
        id: '007',
        title: 'Privacy Policy',
        description:
          'We ( Bundl Technologies Private Limited, alias "Swiggy" ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.swiggy.com ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. ',
      },
      {
        id: '008',
        title: 'Cancellations and Refunds',
        description:
          'a) As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, Swiggy reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, Swiggy shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)Swiggy reserves the right to charge you cancellation fee for the orders constrained to be cancelled by Swiggy for reasons not attributable to Swiggy, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, Swiggy will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to Swiggy or the restaurant partner or delivery partners, Swiggy shall not charge you any cancellation fee.',
      },
      {
        id: '009',
        title: 'Terms of Use for Swiggy ON-TIME / Assured',
        description:
          'These terms of use (the "Terms of Use") that govern your use of our service Swiggy ON-TIME / Assured  ("ON-TIME" / "Assured") on our website www.swiggy.in (the "Website") and our Swiggy application for mobile and handheld devices (the "App"). The services on ON-TIME / Assured  available on our Website and the App are jointly referred to as the "On-Time Delivery". Please read these Terms of Use carefully before you use the Services. If you do not agree to these Terms of Use, you may not use the Services. By using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (incorporated by reference herein) and creates a legally binding arrangement to abide by the same. ',
      },
    ],
    FAQs: [
      {
        id: '011',
        title: 'What is Swiggy Customer Care Number?',
        description:
          'We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in\n\nNote: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.',
      },
      {
        id: '012',
        title: 'I want to explore career opportunities with Swiggy',
        description: 'Work hard.',
      },
      {
        id: '013',
        title: 'I want to provide feedback',
        description: 'Please rate on Google play.',
      },
      {
        id: '014',
        title: 'Can I edit my order?',
        description:
          'Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents',
      },
      {
        id: '015',
        title: 'I want to cancel my order',
        description:
          'We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.',
      },
      {
        id: '016',
        title: 'Will Swiggy be accountable for quality/quantity? ',
        description:
          "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
      },
      {
        id: '017',
        title: 'Is there a minimum order value?',
        description:
          'We have no minimum order value and you can order for any amount. ',
      },
    ],
  },
};
