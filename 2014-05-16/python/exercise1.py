from pyplasm import *
import sys
sys.path.insert(0, '/home/alex/lar-cc/lib/py')
from simplexn import *
from larcc import *
from lar2psm import *
from largrid import *
from boolean import *
from boolean2 import *
from mapper import *
from morph import *
from myfont import *
from splines import *
from architectural import *
from sysml import *



"Generating the basic home block"

basic_block = assemblyDiagramInit([3,3,3])([[.4,10,.4],[.2,3,.2],[.4,11,.4]])

DRAW = COMP([VIEW,STRUCT,MKPOLS])

V,CV = basic_block
toRemove = [16,13]
first = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#hpc = SKEL_1(STRUCT(MKPOLS(first)))
#hpc = cellNumbering (first,hpc)(range(len(first[1])),CYAN,2)
#VIEW(hpc)
#DRAW(first)

"Adding the walls on the x axis"

toMerge = 13
x_split = assemblyDiagramInit([1,1,5])([[10],[3],[3.5,.25,2.5,.25,3.5]])
splitted_x = diagram2cell(x_split,basic_block,toMerge)
toRemove = [15,26,28,30]
V,CV = splitted_x
second = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#hpc = SKEL_1(STRUCT(MKPOLS(second)))
#hpc = cellNumbering (second,hpc)(range(len(second[1])),CYAN,2)
#VIEW(hpc)
#DRAW(second)

"Generating the first split on y axis"

toMerge = 26
y_split_1 = assemblyDiagramInit([3,1,1])([[4.325,.25,4.325],[3],[3.5]])
splitted_y_1 = diagram2cell(y_split_1,splitted_x,toMerge)

toMerge=9
rem_plint_1 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
columned_1 = diagram2cell(rem_plint_1,splitted_y_1,toMerge)

toMerge=11
rem_col_1 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
columned_2 = diagram2cell(rem_col_1,columned_1,toMerge)

toMerge=12
rem_plint_2 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
columned_3 = diagram2cell(rem_plint_2,columned_2,toMerge)

toMerge=15
rem_plint_1 = assemblyDiagramInit([1,1,5])([[.4],[.4],[3.5,.25,2.5,.25,3.5]])
columned_4 = diagram2cell(rem_plint_1,columned_3,toMerge)

toMerge=17
rem_col_1 = assemblyDiagramInit([1,1,5])([[.4],[.4],[3.5,.25,2.5,.25,3.5]])
columned_5 = diagram2cell(rem_col_1,columned_4,toMerge)

toMerge=19
rem_plint_2 = assemblyDiagramInit([1,1,5])([[.4],[.4],[3.5,.25,2.5,.25,3.5]])
columned_6 = diagram2cell(rem_plint_2,columned_5,toMerge)

toMerge=12
roof_split= assemblyDiagramInit([3,1,3])([[4.325,.25,4.325],[.4],[3.5,.25,6.25]])
apartment = diagram2cell(roof_split,columned_6,toMerge) 


toRemove = [52,55,58,51,50,56,40,45,15,17,31,34,25]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(apartment)
#hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
#hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,2)
#VIEW(hpc)

"Adding structure to the first splitted room"


toMerge=17
rem_col_1 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
apartment = diagram2cell(rem_col_1,apartment,toMerge)

toMerge=47
rem_col_2 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
apartment = diagram2cell(rem_col_2,apartment,toMerge)

toMerge=45
rem_col_2 = assemblyDiagramInit([3,1,1])([[6,.25,2],[.4],[.4]])
apartment = diagram2cell(rem_col_2,apartment,toMerge)

toMerge=46
door1 = assemblyDiagramInit([3,2,1])([[.6,1,.6],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=50
door1 = assemblyDiagramInit([3,2,1])([[.1,1,.1],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=20
room_1 = assemblyDiagramInit([3,1,3])([[2,.2,2],[3],[3,.3,1.2]])
apartment = diagram2cell(room_1,apartment,toMerge)

toMerge=51
entrance_door = assemblyDiagramInit([3,3,3])([[.05,0.9,.05],[.05,1.9,.05],[.05,.1,.05]])
apartment = diagram2cell(entrance_door,apartment,toMerge)

toMerge=56
room1_door = assemblyDiagramInit([3,3,3])([[.2,0.6,.2],[.2,1.8,.2],[.2,.6,.2]])
apartment = diagram2cell(room1_door,apartment,toMerge)

toRemove = [77,79,80,82,107,109,104,106,59,61,62,65,66,67]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=4
col_1 = assemblyDiagramInit([1,1,7])([[.4],[.4],[2.45,.2,1.05,.2,2.65,.2,3.65]])
apartment = diagram2cell(col_1,apartment,toMerge)

toMerge=60
door1 = assemblyDiagramInit([1,2,3])([[.2],[1.7,1.3],[.3,1,.3]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=106
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[.9,.9,.9]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=122
window_section = assemblyDiagramInit([1,1,3])([[.2],[.8],[.4,.005,.4]])
window_part = assemblyDiagramInit([5,3,3])([[.025,.025,.1,.025,.025],[.05,.7,.05],[.05,.3,.05]])
toRemove=[2,3,4,5,41,40,39,13,31,6,7,8,42,43,44,0,1,2,36,37,38]
V,CV =  window_part
window_part = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
window_section= diagram2cell(window_part,window_section,2)
window_section= diagram2cell(window_part,window_section,0)
toRemove=[0]
V,CV =  window_section
window_section = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
apartment = diagram2cell(window_section,apartment,toMerge)

toRemove = [113]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
#hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,1)
#VIEW(hpc)
#DRAW(apartment)

"Adding the second splitted rooms on y axis and related details"

toMerge=16
y_split_2 = assemblyDiagramInit([5,1,1])([[2.6,.2,3.8,.2,2],[3],[3.5]])
apartment = diagram2cell(y_split_2,apartment,toMerge)

toMerge=177
door1 = assemblyDiagramInit([1,2,3])([[.2],[2,1],[.3,1,.3]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=32
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[.9,.9,.9]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=107
window1 = assemblyDiagramInit([1,3,3])([[.2],[3,.8,.8],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=173
door1 = assemblyDiagramInit([1,2,3])([[.2],[2,1],[.8,1,.8]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=185
apartment = diagram2cell(window_section,apartment,toMerge)

toMerge=193
apartment = diagram2cell(window_part,apartment,toMerge)

toMerge=16
y_split_2 = assemblyDiagramInit([7,1,1])([[2.6,.2,1.8,.2,1.8,.2,2],[3],[3.5]])
apartment = diagram2cell(y_split_2,apartment,toMerge)

toMerge=281
door1 = assemblyDiagramInit([3,2,1])([[.25,1,.25],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=279
door1 = assemblyDiagramInit([3,2,1])([[.4,1,.4],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)


door_section = assemblyDiagramInit([1,1,3])([[.2],[2],[.5,.01,.5]])
door_part = assemblyDiagramInit([5,3,3])([[.05,.05,.9,.05,.05],[.2,.6,.2],[.1,.2,.1]])
toRemove=[2,3,4,5,41,40,39,13,31,6,7,8,42,43,44,0,1,2,36,37,38]
V,CV =  door_part
door_part = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
door_section= diagram2cell(door_part,door_section,2)
door_section= diagram2cell(door_part,door_section,0)
toRemove=[0]
V,CV =  door_section
door_section = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=290
apartment = diagram2cell(room1_door,apartment,toMerge)

toMerge=197
apartment = diagram2cell(room1_door,apartment,toMerge)

toMerge=175
apartment = diagram2cell(door_section,apartment,toMerge)

door_section_h = assemblyDiagramInit([3,1,1])([[.5,.01,.5],[.2],[2]])
door_part_h = assemblyDiagramInit([3,3,5])([[.1,.2,.1],[.2,.6,.2],[.05,.05,.9,.05,.05]])
toRemove=[4,19,34,9,24,39,23,14,29,44,10,25,40,5,20,21,35,0,15,30]
V,CV =  door_part_h
door_part_h = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
door_section_h= diagram2cell(door_part_h,door_section_h,2)
door_section_h= diagram2cell(door_part_h,door_section_h,0)
toRemove=[0]
V,CV =  door_section_h
door_section_h = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=282
apartment = diagram2cell(door_section_h,apartment,toMerge)

toRemove=[171,172,173,299,301,302,304,321,339,318,336]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
#hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,.04)
#VIEW(hpc)
#DRAW(apartment)

"Adding third splitted rooms on y axis and related details"

toMerge=16
y_split_3 = assemblyDiagramInit([3,1,1])([[4,.2,4],[3],[3.5]])
apartment = diagram2cell(y_split_3,apartment,toMerge)

toMerge=106
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[1,.9,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=31
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=446
window1 = assemblyDiagramInit([1,3,3])([[.2],[3,.8,.8],[1,.8,1]])
apartment = diagram2cell(window_section,apartment,toMerge)

toMerge=437
window1 = assemblyDiagramInit([1,3,3])([[.2],[3,.8,.8],[1,.8,1]])
apartment = diagram2cell(window_section,apartment,toMerge)

toRemove = [430,432]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=8
roof_split= assemblyDiagramInit([3,1,3])([[4.325,.25,4.325],[.4],[3.5,.25,6.25]])
apartment = diagram2cell(roof_split,apartment,toMerge) 	

#hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
#hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,.05)
#VIEW(hpc)
#DRAW(apartment)

"adding colors to the apartment elements"

solid_apartment = MKPOLS(apartment)

window_glasses = [416,391,341,366,458,483,205,230,508,533,255,129,154]
for i in window_glasses:
	solid_apartment[i] = MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 1,1,1,0.1, 100])(solid_apartment[i]) 



door_colors = [406,405,404,415,414,413,422,421,420,425,424,423,409,408,407,428,427,426,419,418,417,412,411,
410,336,335,334,353,352,351,378,377,376,361,360,359,333,332,342,340,350,349,358,367,375,357,365,374,331,330,
329,348,347,346,339,338,337,356,355,354,364,363,362,373,372,371,63,64,86,87,293,292,314,317,381,380,379,390,
389,388,397,396,395,400,399,398,384,383,382,387,386,385,394,393,392,403,402,401]
for i in door_colors:
	solid_apartment[i] = COLOR([0.7,0.3,0])(solid_apartment[i])

hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,1)
VIEW(hpc)	

border_colors=[74,75,76,65,66,67,60,61,62,71,72,73,57,58,59,68,69,70,54,55,56,91,92,93,77,78,79,80,81,82,
94,95,96,97,98,99,83,84,85,88,89,90,289,290,291,294,295,296,303,304,305,286,287,288,300,301,302,283,284,
285,297,298,299,312,311,310,321,320,319,328,327,326,309,308,318,316,325,324,307,306,315,313,323,322,448,447,
446,456,455,454,465,464,463,473,472,471,481,480,479,490,489,488,450,449,467,466,459,457,475,484,492,474,482,
491,453,452,451,470,469,468,462,461,460,478,477,466,487,486,485,495,494,493,200,199,198,225,224,223,209,208,
207,234,233,232,217,216,215,242,241,240,197,196,222,221,206,204,231,229,214,213,239,238,195,194,193,220,
219,218,228,227,226,237,236,235,211,210,212,498,497,496,506,505,504,515,514,513,523,522,521,531,530,529,
540,539,538,500,499,509,507,517,516,525,524,534,532,542,541,503,502,501,512,511,510,520,519,518,528,527,
526,537,536,535,545,544,543,245,244,243,253,252,251,262,261,260,247,246,256,254,264,263,250,249,248,259,
258,257,267,266,265,119,118,117,144,143,142,127,126,125,152,151,150,136,135,134,161,160,159,121,120,130,
128,138,137,146,145,155,153,163,162,124,123,122,133,132,131,141,140,139,149,148,147,158,157,156,166,165,164
,121,120,130,128,138,137,146,145,155,153,163,162,477]
for i in border_colors:
	solid_apartment[i] = COLOR([0.6,0.16,0])(solid_apartment[i])

#VIEW(STRUCT(solid_apartment))	

"adding color to the room walls"

room_walls = [429,268,272,271,277,274,275,276,273,270,281,282,280,279,278,269,192,191,190,188,189,107,40,
48,49,51,50,41,47,52,106,108,53,105,104,169,170,171,168,167]

for i in room_walls:
	solid_apartment[i] = COLOR([1,0.7,0.45])(solid_apartment[i])

"adding color to the external walls"

ext_walls = [19,15,42,43,44,45,46,39,9,445,442,440,444,439,443,441,439,13,437,4,436,435,433,430,434,431,432
,103,187,184,182,181,180,186,185,183,102,101,100,116,115,111,110,109,112,114,3,20,28,179,178,177,438,113,38,
172,173,174,176,175,29,38,36,35,6,21,5,7,22,21,34,30,31,32,33,14,10,37,281]	
for i in ext_walls:
	solid_apartment[i] = COLOR([1,0.64,0])(solid_apartment[i])

floors=[546,548,554,549,551,553,547]
for i in floors:
	solid_apartment[i] = COLOR(RED)(solid_apartment[i])

ground_borders=[16,17,18,0,1,2,8,12,27,26,25,24,23,11]
for i in ground_borders:
	solid_apartment[i] = COLOR([0.4,.4,.4])(solid_apartment[i])

V,FV = apartment;

#hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
#hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,1)
#VIEW(hpc)


#VIEW(STRUCT(solid_apartment))


