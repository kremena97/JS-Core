class Organization {

    constructor(name, budget) {
        this.name = name;
        this.budget = Number(budget);
        this.employees = [];

        this.marketingBudget = this.budget * 0.4;
        this.financeBudget = this.budget*0.25;
        this.productionBudget = this.budget * 0.35
    }

    get departmentsBudget() {
        return {
            marketing: this.marketingBudget,
            finance: this.financeBudget,
            production: this.productionBudget
        }
    }

    add(employeeName, department, salary) {
        let departmentBudget = this.departmentsBudget[department];
        if (departmentBudget < salary) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${departmentBudget}.`
        } else {
            let employee = {
                employeeName: employeeName,
                department: department,
                salary: salary
            };

            this.employees.push(employee);
            switch (department) {
                case 'marketing': this.marketingBudget -=salary;
                break;
                case 'finance': this.financeBudget -= salary;
                break;
                case 'production': this.productionBudget -= salary;
                break;
            }
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }
    }

    employeeExists(employeeName) {
        let employee = this.employees.filter(x => {
            return x.employeeName === employeeName
        })[0];
        if (employee === undefined) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        } else {
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        }
    }

    leaveOrganization(employeeName){
        debugger;
        let employee = this.employees.filter(x => {
            return x.employeeName === employeeName
        })[0];

        if (employee === undefined) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        } else {
            this.employees.splice(this.employees.findIndex(x=>x.employeeName === employeeName),1);
            switch (employee.department) {
                case 'marketing': this.marketingBudget +=employee.salary;
                    break;
                case 'finance': this.financeBudget += employee.salary;
                    break;
                case 'production': this.productionBudget += employee.salary;
                    break;
            }
            this.departmentsBudget[employee.department]+= employee.salary;

            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }
    }

    status(){
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let marketingEmployees = this.employees.filter(x=>{
            return x.department === 'marketing';
        }).sort((a,b)=> b.salary - a.salary);
        let financeEmployees = this.employees.filter(x=>{
            return x.department === 'finance';
        }).sort((a,b)=> b.salary - a.salary);
        let productionEmployees = this.employees.filter(x=>{
            return x.department === 'production';
        }).sort((a,b)=> b.salary - a.salary);

        output += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.map(function (elem) {
            return elem.employeeName
        }).join(', ')} | Remaining Budget: ${this.departmentsBudget.marketing}`;

        output += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.map(function (elem) {
            return elem.employeeName
        }).join(', ')} | Remaining Budget: ${this.departmentsBudget.finance}`;

        output += `\nProduction | Employees: ${productionEmployees.length}: ${productionEmployees.map(function (elem) {
            return elem.employeeName
        }).join(', ')} | Remaining Budget: ${this.departmentsBudget.production}`;
        return output;
    }
}



let organization = new Organization('SBTech', 1000);

console.log(organization.add('Peter', 'marketing', 100));
console.log(organization.add('Alex', 'marketing', 120));
console.log(organization.status());
