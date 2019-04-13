//
//  LoadingView.swift
//  PoodleSurf
//
//  Created by Westin Newell on 4/9/19.
//  Copyright © 2019 Haiku. All rights reserved.
//

import UIKit
import Lottie

class LoadingView: UIView {
    init() {
        super.init(frame: CGRect.zero)
    }

    func setAnimationView(to animationView: LOTAnimationView?) {
        if let currentView = self.animationView {
            currentView.removeFromSuperview()
        }

        self.animationView = animationView

        guard let animationView = animationView else { return }

        animationView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(animationView)
        NSLayoutConstraint.activate([
            animationView.centerXAnchor.constraint(equalTo: centerXAnchor),
            animationView.centerYAnchor.constraint(equalTo: centerYAnchor),
        ])

        animationView.loopAnimation = true
        animationView.play()
    }

    override class var requiresConstraintBasedLayout: Bool {
        return true
    }

    private var animationView: LOTAnimationView?

    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) { fatalError("\(#function) not implemented.") }
}
