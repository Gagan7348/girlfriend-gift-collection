$(function () {
    var audio = $('.song')[0];
    var fallbackSource = 'assets/romantic-theme.wav';

    audio.addEventListener('error', function () {
        if (audio.dataset.fallbackLoaded === 'true') {
            return;
        }
        audio.dataset.fallbackLoaded = 'true';
        audio.src = fallbackSource;
        audio.load();
    });
});
