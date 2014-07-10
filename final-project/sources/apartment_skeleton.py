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

import simplexn
from simplexn import *


''' Facets extraction of a block diagram '''
def extractFacets(master, emptyChain=[]):
	solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
	exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
	exteriorCV += exteriorCells(master)
	CV = solidCV + exteriorCV
	V = master[0]
	FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
	BF = boundaryCells(solidCV,FV)
	boundaryFaces = [FV[face] for face in BF]
	B_Rep = V,boundaryFaces
	return B_Rep


''' Triangular facets extraction of a block diagram '''
def extractTriaFacets(master, emptyChain=[]):
	master = extractFacets(master,emptyChain)
	master = quads2tria(master)
	return master


''' Exports a model (V,FV) into an .obj format file at 'filePath' '''
def objExporter((V,FV), filePath):
	out_file = open(filePath,"w")
	out_file.write("# List of Vertices:\n")
	for v in V:
		out_file.write("v")
		for c in v:
			out_file.write(" " + str(c))
		out_file.write("\n")
	out_file.write("# Face Definitions:\n")
	for f in FV:
		out_file.write("f")
		for v in f:
			out_file.write(" " + str(v+1))
		out_file.write("\n")
	out_file.close()


''' Rimuove dalla lista dei vertici i vertici non effettivamente 
	utilizzati per la definizione delle celle '''
def clearUnusedVertices((V,CV)):
	UV = [v for cell in CV for v in cell]
	UnV = [k for k,vert in enumerate(V) if k not in UV]
	for cell in CV:
		for i in range(len(cell)):
			c = 0
			for v in UnV:
				if cell[i] > v:
					c += 1
			cell[i] -= c
	V = [vert for k,vert in enumerate(V) if k not in UnV]
	return V,CV




apartment = assemblyDiagramInit([9,3,9])([[.4,2.8,.2,1.3,.2,1.3,.2,3,.4],[.2,3,.2],[.4,3,.3,1.2,.25,2.5,.25,3.5,.4]])

DRAW = COMP([VIEW,STRUCT,MKPOLS])

toMerge=232
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[1,.9,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=230
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[.9,.9,.9]])
apartment = diagram2cell(window1,apartment,toMerge)


toMerge=176
door1 = assemblyDiagramInit([1,2,3])([[.2],[2,1],[.5,1,.5]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=150
door1 = assemblyDiagramInit([3,2,1])([[.1,1,.1],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=148
door1 = assemblyDiagramInit([3,2,1])([[.3,1,.3],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=96
door1 = assemblyDiagramInit([3,2,1])([[.3,1,.3],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=94
door1 = assemblyDiagramInit([3,2,1])([[.3,1,.3],[2,1],[.2]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=68
door1 = assemblyDiagramInit([1,2,3])([[.2],[2,1],[.9,1,.9]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=66
door1 = assemblyDiagramInit([1,2,3])([[.2],[2,1],[.3,1,.3]])
apartment = diagram2cell(door1,apartment,toMerge)

toMerge=16
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[.9,.9,.9]])
apartment = diagram2cell(window1,apartment,toMerge)


toMerge=14
window1 = assemblyDiagramInit([1,3,3])([[.2],[3,.8,.8],[1,.8,1]])
apartment = diagram2cell(window1,apartment,toMerge)

toMerge=10
window1 = assemblyDiagramInit([1,3,3])([[.2],[.8,1,.8],[.9,.9,.9]])
apartment = diagram2cell(window1,apartment,toMerge)

emptyChain=[295,49,40,74,65,99,90,269,151,142,257,177,168,204,195,235,304,47,38,280,97,89,124,115,149,141,
250,202,193,244,275,263,45,36,286,95,88,147,140,173,165,200,191,225,218,94,87,145,139,172,164,199,190,
217,313,43,34,68,61,93,86,145,138,171,163,198,189,223,216,144,137,170,162,197,188,222,215,146,224]

ext_apartment = extractTriaFacets(apartment,emptyChain)

#DRAW(ext_apartment)

objExporter(ext_apartment,"apartment.obj")




