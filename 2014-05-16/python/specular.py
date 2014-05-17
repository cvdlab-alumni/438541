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

"Generating a specular apartment model"

basic_block = assemblyDiagramInit([3,3,3])([[.4,10,.4],[.2,3,.2],[.4,11,.4]])

DRAW = COMP([VIEW,STRUCT,MKPOLS])

V,CV = basic_block
toRemove = [16,13]
first = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(first)))

toMerge = 13
x_split = assemblyDiagramInit([1,1,5])([[10],[3],[3.5,.25,2.5,.25,3.5]])
splitted_x = diagram2cell(x_split,basic_block,toMerge)
toRemove = [15,26,28,30]
V,CV = splitted_x
second = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

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


toRemove = [9,16,36,14,32,26,29,41]
V,CV =  columned_6
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

"Adding structure to the first splitted room"

toMerge=17
rem_col_1 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
columned_7 = diagram2cell(rem_col_1,apartment,toMerge)

toMerge=44
rem_col_2 = assemblyDiagramInit([3,1,1])([[4.2,.25,4.2],[.4],[.4]])
columned_8 = diagram2cell(rem_col_2,columned_7,toMerge)

toMerge=42
rem_col_2 = assemblyDiagramInit([3,1,1])([[6,.25,2],[.4],[.4]])
columned_9 = diagram2cell(rem_col_2,columned_8,toMerge)

toMerge=43
door1 = assemblyDiagramInit([3,2,1])([[.3,1,.3],[1,2],[.2]])
doored = diagram2cell(door1,columned_9,toMerge)

toMerge=47
door1 = assemblyDiagramInit([3,2,1])([[.1,1,.1],[1,2],[.2]])
doored = diagram2cell(door1,doored,toMerge)

toMerge=20
room_1 = assemblyDiagramInit([3,1,3])([[2,.2,2],[3],[3,.3,1.2]])
doored = diagram2cell(room_1,doored,toMerge)

toRemove = [58,60,61,64,65,66]
V,CV =  doored
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=4
col_1 = assemblyDiagramInit([1,1,7])([[.4],[.4],[2.45,.2,1.05,.2,2.65,.2,3.65]])
apartment = diagram2cell(col_1,apartment,toMerge)

toMerge=59
door1 = assemblyDiagramInit([1,2,3])([[.2],[1.3,1.7],[.3,1,.3]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=59
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,.8,.8],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,1)

toRemove = [75,54,69]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=16
y_split_2 = assemblyDiagramInit([5,1,1])([[2.6,.2,3.8,.2,2],[3],[3.5]])
apartment = diagram2cell(y_split_2,apartment,toMerge)

toMerge=79
door1 = assemblyDiagramInit([1,2,3])([[.2],[1,2],[.3,1,.3]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=31
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,.8,.8],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=59
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,.8,3],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=75
door1 = assemblyDiagramInit([1,2,3])([[.2],[1,2],[.8,1,.8]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=16
y_split_2 = assemblyDiagramInit([7,1,1])([[2.6,.2,1.8,.2,1.8,.2,2],[3],[3.5]])
apartment = diagram2cell(y_split_2,apartment,toMerge)

toMerge=110
door1 = assemblyDiagramInit([3,2,1])([[.3,1,.3],[1,2],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=108
door1 = assemblyDiagramInit([3,2,1])([[.8,1,.8],[1,2],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc = cellNumbering (apartment,hpc)(range(len(apartment[1])),CYAN,2)

toRemove = [45,95,104,73,74,80,75,86]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge=16
y_split_3 = assemblyDiagramInit([3,1,1])([[4,.2,4],[3],[3.5]])
apartment = diagram2cell(y_split_3,apartment,toMerge)


toMerge=57
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,.8,.8],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=30
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,.8,.8],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)



toRemove = [114,119,109,103,128,112]
V,CV =  apartment
apartment = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

specular_apartment = T([2])([3.4])(R([1,3])(PI)(R([1,2])(PI)(STRUCT(MKPOLS(apartment)))))