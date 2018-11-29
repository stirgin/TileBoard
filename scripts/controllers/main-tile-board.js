App.controller('MainController', [
    '$scope',
    MainController
]);

function MainController($scope) {
    var bodyClass = null;
    var activePage = null;

    $scope.getBodyClass = function () {
        if(!bodyClass) {
            bodyClass = [];

            if(COMMON.customTheme) {
                var themes = COMMON.customTheme;

                if(typeof themes === "string") themes = [themes];

                themes.map(function (theme) {
                    bodyClass.push('-theme-' + theme);
                });
            }

            if(COMMON.entitySize) {
                bodyClass.push('-' + CONFIG.entitySize + '-entity');
            }

            var menuPos = COMMON.menuPosition || MENU_POSITIONS.LEFT;
            var groupsAlign = COMMON.groupsAlign || GROUP_ALIGNS.HORIZONTALLY;

            bodyClass.push('-menu-' + menuPos);
            bodyClass.push('-groups-align-' + groupsAlign);

            if(COMMON.hideScrollbar) {
                bodyClass.push('-hide-scrollbar');
            }
        }

        var scrollClasses = [];


        if(activePage) {
            if(activePage.scrolledHorizontally) {
                scrollClasses.push('-scrolled-horizontally');
            }

            if(activePage.scrolledVertically) {
                scrollClasses.push('-scrolled-vertically');
            }
        }

        return bodyClass.concat(scrollClasses);
    };
}