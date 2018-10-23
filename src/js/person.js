function Person(attr) {
    this.weight = attr.weight
    this.height = attr.height
};

Person.prototype.calculate_bmi = function() {
    this.calculator = new BMICalculator();
    this.calculator.metric_bmi(this)
};