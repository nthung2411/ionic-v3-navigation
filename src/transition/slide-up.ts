import { Animation, PageTransition } from "ionic-angular";

export class SlideUpTransition extends PageTransition {
    init() {
        super.init();
        const plt = this.plt;
        const enteringViewController = this.enteringView;
        if (!enteringViewController) {
            return;
        }

        const leavingViewController = this.leavingView;
        if (!leavingViewController) {
            return;
        }

        const enteringViewPageRef = enteringViewController.pageRef();
        const enteringView = enteringViewPageRef.nativeElement;

        const leavingViewPageRef = leavingViewController.pageRef();
        const leavingView = leavingViewPageRef.nativeElement;

        const opts = this.opts;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // what direction is the transition going
        const isForward = opts.direction === 'forward';
        if (isForward) {
            const enteringViewAnimation = new Animation(plt, enteringView.querySelector('ion-content .scroll-content'));

            enteringViewAnimation.fromTo('transform', `translateY(${height}px)`, 'translateY(0px)').afterClearStyles(['transform']);


            this.duration(800)
                .add(enteringViewAnimation)
                .easing('ease-in');
        } else {
            const leavingViewAnimation = new Animation(plt, leavingView.querySelector('ion-content .scroll-content'));

            leavingViewAnimation.fromTo('transform', 'translateY(0px)', `translateY(${height}px)`).afterClearStyles(['transform']);
            leavingViewAnimation.fromTo('opacity', '1', '0', true);

            const enteringViewAnimation = new Animation(plt, enteringView.querySelector('ion-content .scroll-content'));
            enteringViewAnimation.fromTo('opacity', '0', '1', true);


            this.duration(500)
                .add(enteringViewAnimation);
            this.duration(600)
                .add(leavingViewAnimation);
        }
    }
}