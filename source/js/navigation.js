(function() {
    var me = {};

    me.toggleToActiveLink = function(target) {
        var links = document.querySelectorAll('.nav__link');
        var showedSection = target.dataset.link;

        console.log(showedSection)

        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active')
            }
        }

        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection);
    };

    function scrollToActiveSection(showedSection) {
        document.querySelector('.' + showedSection).scrollIntoView({
            behavior: 'smooth'
        });
    }

    ITVDN.navigation = me;
}());

