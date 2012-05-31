/*
 * Font Plugin Example
 * Written by Abraham Walters
 * May 2012
 */
ig.module( 
    'game.main' 
)
.requires(
    'impact.game',
    'impact.font',

    'plugins.font'
)
.defines(function(){

FontExample = ig.Game.extend({
    
    fireFont: new Font( '20px Garamond' ),        //animated font
    font: new Font( '20px Garamond' ),            //basic font

    init: function(){
        ig.input.bind( ig.KEY.SPACE, 'prompt' );

        //add array of colors to font to animate through
        this.fireFont.colors = ['#FF0000', '#FF6600', '#FFFF00', '#FFFFFF' ];
    },

    draw: function() {
        ig.system.clear( this.clearColor );

        var x = ig.system.width / 2 - this.font.getWidth() / 2,
            y = ig.system.height / 2,
            offset = this.font.size * 1.5;
        
        //draw font with various parameters
        this.font.draw( 'Hello World', x, y - offset  ); //left align, white coloring
        this.font.draw( 'Hello World', x, y, 'right' );  //white coloring
        this.font.draw( 'Hello World', x, y + offset, 'center', '#FF0000' );

        //draw animated font
        this.fireFont.draw( 'Hello World', x, y + offset * 2, 'center' );
    },

    update: function(){
        //if space is pressed, allow user to enter new font type
        if( ig.input.pressed( 'prompt' ) ){
            this.font.font = prompt( 'Enter New Font Type:', this.font.font ) || this.font.font;
            this.fireFont.font = this.font.font;
        }

        //animate through font colors
        this.fireFont.update();
    }
});

ig.main( '#canvas', FontExample, 60, 320, 240, 2 );

});