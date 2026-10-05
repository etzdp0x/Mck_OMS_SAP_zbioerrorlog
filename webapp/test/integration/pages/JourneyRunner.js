sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zfi/mkc/zbioerrorlog/test/integration/pages/ZCDS_CV_FI_CPR_ERRORLOGList.gen",
	"com/zfi/mkc/zbioerrorlog/test/integration/pages/ZCDS_CV_FI_CPR_ERRORLOGObjectPage.gen"
], function (JourneyRunner, ZCDS_CV_FI_CPR_ERRORLOGListGenerated, ZCDS_CV_FI_CPR_ERRORLOGObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zfi/mkc/zbioerrorlog') + '/test/flp.html#app-preview',
        pages: {
			onTheZCDS_CV_FI_CPR_ERRORLOGListGenerated: ZCDS_CV_FI_CPR_ERRORLOGListGenerated,
			onTheZCDS_CV_FI_CPR_ERRORLOGObjectPageGenerated: ZCDS_CV_FI_CPR_ERRORLOGObjectPageGenerated
        },
        async: true
    });

    return runner;
});

