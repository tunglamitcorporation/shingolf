const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin');

router.post('/register', userCtrl.register);

// router.post('/activation', userCtrl.activateEmail);

// router.post('/dev/activation', userCtrl.activateEmail2);

router.post('/login', userCtrl.login);

// router.post('/login_other', userCtrl.loginOther);

// router.post('/refresh_token', userCtrl.getAccessToken);

// router.post('/forgot', userCtrl.forgotPassword);

// router.post('/reset', auth, userCtrl.resetPassword);

// router.post('/reset_by_admin', auth, authAdmin, userCtrl.resetPasswordByAdmin);

// router.post('/sent_mail_rc_sum/:dayReport', auth, userCtrl.sentMailRcSum);

// router.post('/sent_mail_survey_online', auth, userCtrl.sentSurveyOnlineWeekMonth);

// router.post('/sent_mail_acc_sum/:dayReport', auth, userCtrl.sentMailAccSum);

// router.post('/sent_mail_man_report/:dayReport', auth, userCtrl.sentMailManSum);

// router.post('/send_support_mail_test', auth, authAdmin, userCtrl.sentSupportMailTest);

// router.post('/send_support_mail_to_list/:type', auth, authAdmin, userCtrl.sentSupportMailToListPromotion); //userCtrl.sentSupportMailToList);

// router.post('/add_noti/:id', userCtrl.addNotification);

// router.post('/sent_noti', userCtrl.sentNotification);

// router.get('/infor', auth, userCtrl.getUserInfor);

// router.get('/get_cookie', userCtrl.getCookies);

// router.get('/delete_cookie', userCtrl.deleteCookies)

// router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor);

// router.get('/get_infor_by_area/:area', auth, authAdmin, userCtrl.getUsersByArea);

// router.get('/get_infor_by_area_az_share/:area', userCtrl.getUserShareWithBranch);

// router.get('/logout', userCtrl.logout);

// router.get('/test_api', userCtrl.testApi);

// router.patch('/update', auth, userCtrl.updateUser);

// router.patch('/update_acc_hidden_tab', auth, userCtrl.updateAccHiddenTab);

// router.patch('/update_other', auth, authAdmin, userCtrl.updateUsersOther);

// router.patch('/update_other_az_share', auth, authAdmin, userCtrl.updateUsersShareOther);

// router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole);

// router.patch('/update_noti/:id', userCtrl.updateNotification);

// router.get('/check_access/:branchID', auth, userCtrl.checkAccess);

// // router.patch('/update_noti/:id', userCtrl.updateUsersRole);

// router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser);


module.exports = router;
