/*
Trees To Plant
Plant some trees. 
There are three parameters of the 
land which are needed to plant trees.

w, short for width of the land
l, short for length of the land
g, short for gap between the trees

Create a function that returns 
the number of trees which can be planted 
along the border of the given land 
in a symmetrical layout shown below 
(unsymmetrical gap = x, gap = -, tree = o):

w=4, l=4, g=2
plantTrees(w, l, g) -> results in 4 trees planted. 

o - - o
-     -
-     -
o - - o

w=4, l=4, g=1
plantTrees(w, l, g) -> results in 6 trees planted.

o - o -
-     o
o     -
- o - o

If not every gap is the same number, 
0 must be returned.

w=4, l=4, g=4
plantTrees(w, l, g) -> results in 0 trees planted,
                       as not all gaps are matching.

o x x x
x     x
o     o
x x x x

w=4, l=4, g=6
plantTrees(w, l, g) -> results in 0 trees planted,
                       as not all gaps are matching.

o x x x
x     x
x     x
x x o x

w=4, l=4, g=0
plantTrees(w, l, g) -> results in 12 trees planted.

o o o o
o     o
o     o
o o o o

*/

/* My Solution */

function plantTrees(w, l, g) {
    const perimeterActualDistance = (l + w) + (w - 2)*2;
    let result = 0;
               if(perimeterActualDistance % (g + 1)%1 === 0){
                   result = perimeterActualDistance / (g + 1);
               }
        return result % 1 === 0? result: 0;
}