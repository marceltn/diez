import { Color, DropShadow, File, Font, GradientStop, Image, LinearGradient, Point2D, Typograph } from "@diez/prefabs";

class MyDesignSystemColors {
    untitledColor = 2;
    someColor = 3;
}

class MyDesignSystemGradients {
    untitledLinearGradient = 4;
    someGradient = 5;
}

class MyDesignSystemShadows {
    untitledShadow = 6;
    someShadow = 7;
}

class MyDesignSystemTypography {
    untitledTypograph = 0;
    someTypograph = 1;
}

export class MyDesignSystemSlicesFiles {
    static Foobar = new File({src: "assets/blah/Foobar.png"});
    static Foobar2x = new File({src: "assets/blah/Foobar@2x.png"});
    static Foobar3x = new File({src: "assets/blah/Foobar@3x.png"});
    static Foobar4x = new File({src: "assets/blah/Foobar@4x.png"});
    static Bazbat = new File({src: "assets/blah/Bazbat.png"});
    static Bazbat2x = new File({src: "assets/blah/Bazbat@2x.png"});
    static Bazbat3x = new File({src: "assets/blah/Bazbat@3x.png"});
    static Bazbat4x = new File({src: "assets/blah/Bazbat@4x.png"});
}

export class MyDesignSystemSlices {
    static Foobar = Image.responsive("assets/blah/Foobar.png", 640, 480);
    static Bazbat = Image.responsive("assets/blah/Bazbat.png", 320, 240);
}

export const MyDesignSystemFonts = {
    SomeFont: {
        BoldItalic: Font.fromFile("assets/fonts/SomeFont-BoldItalic.ttf"),
        ExtraMedium: Font.fromFile("assets/fonts/SomeFont-ExtraMedium.ttf")
    }
};

export class MyDesignSystemTokens {
    colors = new MyDesignSystemColors();
    gradients = new MyDesignSystemGradients();
    shadows = new MyDesignSystemShadows();
    typography = new MyDesignSystemTypography();
}

export const myDesignSystemTokens = new MyDesignSystemTokens();