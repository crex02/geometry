class Triangle {
    constructor(pointA, pointB, pointC){
    
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;

    this.segmentAB = new Segment (this.pointA, this.pointB);
    this.segmentBC = new Segment (this.pointB, this.pointC);
    this.segmentCA = new Segment (this.pointC, this.pointA);
}

calculatePerimeter (){
    return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;

}

calculateSemiPerimeter(){
    return this.calculatePerimeter() / 2;
}
calculateArea(){
    const semiPerimeterMinusSegmentAB = this.calculateSemiPerimeter() - this.segmentAB.length;
    const semiPerimeterMinusSegmentBC = this.calculateSemiPerimeter() - this.segmentBC.length;
    const semiPerimeterMinusSegmentCA = this.calculateSemiPerimeter() - this.segmentCA.length;
    const product = this.calculateSemiPerimeter() *
                    semiPerimeterMinusSegmentAB *
                    semiPerimeterMinusSegmentBC *
                    semiPerimeterMinusSegmentCA;
    const area = Math.sqrt(product);
    return area;

}

}

// class Triangle2 {
//     constructor(pointA, pointB, pointC){

//     this.segmentAB = new Segment (this.pointA, this.pointB);
//     this.segmentBC = new Segment (this.pointB, this.pointC);
//     this.segmentCA = new Segment (this.pointC, this.pointA);
// }
// get pointA(){
//     return this.segmentAB.pointA;
// }
// get pointB(){
//     return this.segmentAB.pointB;
// }
// get pointC(){
//     return this.segmentBC.pointC;
// }
// }

// class Triangle3 {
//     constructor(pointA, pointB, pointC){
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.pointC = pointC;
// }
// get segmentAB(){
//     return new Segment(this.pointA, this.pointB);;
// }
// get segmentBC(){
//     return new Segment(this.pointB, this.pointC);;
// }
// get segmentCA(){
//     return new Segment(this.pointC, this.pointA);;
// }
// }

