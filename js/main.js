console.clear()

const { gsap } = window

const tl = gsap.timeline({
	defaults: {
		ease: "expo.inOut",
		stagger: 0.12,
		duration: 2,
	},
	repeat: -1,
})

tl.to(".cube", { rotateY: -90 }, 0)
tl.to(".cube .cube__face--front", { skewX: 30 }, 0)
tl.from(".cube .cube__face--right", { skewX: 30 }, 0.15)
tl.to(".cube .cube__face--front", { backgroundPosition: "0% 50%" }, 0)
tl.to(".cube .cube__face--right", { backgroundPosition: "0% 50%" }, 0.15)
