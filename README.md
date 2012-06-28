Canvas-Native-Fonts-Plugin
==========================

Canvas-Native Fonts Plugin for ImpactJS

This plugin provides an ImpactJS api for using Canvas-native fonts. It offers
movement, color and animation along with standard Font drawing.

Typically, you instantiate a Font object like this:

<quote>var font = new Font( '20px Garamond' );</quote>

It's important the size gets listed first in the font string - this is a Canvas requirement.
You can also add text and positioning if desired:

var font = new Font( '20px Garamond', 'Hello World', ig.system.width / 2, ig.system.height / 2 );

For ease-of-use, most parameters are optional for method calls, including the constructor.
When omitting parameters, values will default to the preset properties defined for the Font class.
Thus,

var font = new Font(); //defaults to '20px Garamond' style font with no font string

is legal, though not necessarily desirable.

If you specify a velocity, the Font will move. To do this, you'll need to add font.update()
to the corresponding class it's a property of (typically, ig.game.update()).

When it comes time to draw, you can specify several optional parameters:

font.draw();

font.draw( 'Hello World' );

font.draw( 'Hello World', ig.system.width / 2, ig.system.height / 2 );

font.draw( 'Hello World', ig.system.width / 2, ig.system.height / 2, 'right' );

font.draw( 'Hello World', ig.system.width / 2, ig.system.height / 2, 'right', 'rgba( 255, 0, 0, 1 )' );


You can see the optional parameter paradigm at work here.

The first draws the font with all the preset properties. The second draws a specific font string.
The third draws a specified font string at a specified position. The fourth draws a specified font string
at a specified position using a specified alignment. The fifth, and final, mimics the fourth example with
color added into the mix.

Again, you'll need to add font.draw() to the corresponding class it's a property of (typically, ig.game.draw()).

An important method is the global Font.Width(). Often, you'll need to know the width of a font in order to
properly position it upon the canvas. It's signature is

Font.Width( font, string ) i.e. Font.Width( '20px Garamond', 'Hello World' );

For additional information, you are encouraged to take a look at the Font plugin code, which has been
heavily commented.

Included with the Font class is an optional FontManager class for those who are feeling lazy.
It will keep track of all your Fonts and .draw() and .update() each of them.

After instantiating the FontManager, individual Fonts can be added via the add()
or spawn() methods:

var fm = new FontManager();
var font = new Font( '20px Garamond, 'Hello World' );
fm.add( 0.3, font );
fm.spawn( 0.2, '20px Garamond', 'Hello World' );

Notice that both methods require a number as their first parameter. This is the
lifetime of a font. The FontManager is designed to track a font for a specific 
time period and then kill() it off. If you want the font to stick around indefinitely,
you can set the lifetime = 0.

Several new properties are added to the Font plugin by the FontManager, including lifetime and alpha.
The alpha is the opacity of the Font. As the Font ages over its lifetime, it will slowly fade out.
This is useful for word balloons or the HUD, where a pop-up notification is given to the player that
slowly fades out.

Like the Font plugin, the FontManager .update() and .draw() will need to be added to the corresponding class
it is a property of (typically, ig.game.update() and ig.game.draw()). You are again encouraged to dig into the code
for more information and to tweak to your heart's content.

Enjoy.