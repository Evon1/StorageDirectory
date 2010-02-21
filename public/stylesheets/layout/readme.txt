==========================================================================
=                                                                        =
=                     MY SIMPLE FRAMEWORK v.1.3                          =
=                                                                        =
=		   	  Thank you for downloading My Simple Framework              =
=       A simple yet powerful framework focusing on adaptability         =
=              Created by Samuel Petit (www.woobzine.com)                =
=                                                                        =
==========================================================================


HOW TO CHOOSE YOUR LAYOUT ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With more than 1600 layouts, we had to find a way to organize them by their name.

At first, it may seem a little difficult but, in fact, it's really easy to understand.
Here is how we named the layouts:

[head/nav order]
-
[number of first-level columns](position of main columns)
-
[number of second-level columns](position of main columns)
-
[liquid or 960px width]


Please note that each element order of appearance is from top to bottom.



EXAMPLES
~~~~~~~~~~~~~~~~~~~~~

Let's take a file and explain what its name means:

	* head-nav-2col(1)-4col(2-3)-liquid.css

From top to bottom:

	head: 		-first comes the header.
	
	nav: 		-the navigation menu comes in second position, right after the header.
	
	2col(1): 	-then, the first level of the content is divided in 2 columns.
				 The first column is the main one (so the second column is a sidebar).
	
	4col(2-3):  -the second level of the content is divided in 4 columns.
				 The second and third columns are the main ones (so the first and fourth columns are sidebars)
				 
	liquid:		-this is a liquid layout, which means that the main columns will stretch to fit the width of
				 the screen. (The sidebars have fixed width).
				 


