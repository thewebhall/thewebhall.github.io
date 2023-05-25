class CustomerBuilder{
    constructor(){
        this.customers = [];
    }

    addCustomer(logoLink, pageLink, ssLink){
        let customer = {
            logoLink: logoLink,
            pageLink: pageLink,
            ssLink: ssLink
        }

        this.customers.push(customer);
    }

    loadCustomers(list){
        this.customers = list;
    }

    renderCustomers(){
        let customerSection = document.getElementById('testimonials');
        this.customers.forEach(c => {
            let customerObj = document.createElement('div');
            customerObj.classList.add('customer');

            let logoObj = document.createElement('img');
            logoObj.src = c.logoLink;
            logoObj.classList.add('customer-logo');
            
            let linkObj = document.createElement('a');
            linkObj.href = c.pageLink;
            linkObj.innerText = c.pageLink;
            linkObj.classList.add('customer-link');
            linkObj.target = "_blank";

            let revealArrow = document.createElement('img');
            revealArrow.src = "./imgs/icons/reveal.png";
            revealArrow.classList.add('reveal-icon', 'animation', 'rotateBack-animation');

            let ssObj = document.createElement('img');
            ssObj.classList.add('testimonal-ss', 'animation', 'hide-animation');
            ssObj.src = c.ssLink;

            revealArrow.addEventListener('click', () => {
                ssObj.classList.toggle('hide-animation');
                ssObj.classList.toggle('reveal-animation');

                revealArrow.classList.toggle('rotateBack-animation');
                revealArrow.classList.toggle('rotate-animation');
            })

            customerObj.appendChild(logoObj);
            customerObj.appendChild(linkObj);
            customerObj.appendChild(revealArrow);
            customerObj.appendChild(ssObj);

            customerSection.appendChild(customerObj);

          //  let ssObj = document.createElement('div');

        })
    }
}

const CUSTOMERS = [
    {
        logoLink: "./imgs/logos/itel.png",
        pageLink: "https://itel.com.pl/",
        ssLink: "./imgs/ss/bruce.gif"
    },

    {
        logoLink: "./imgs/logos/lauferhaus.jpg",
        pageLink: "https://lauferhaus.pl/",
        ssLink: "./imgs/ss/bruce.gif"
    },

    {
        logoLink: "./imgs/logos/empty.png",
        pageLink: "https://tanieprasowanie.com.pl/",
        ssLink: "./imgs/ss/bruce.gif"
    },
]


document.addEventListener('DOMContentLoaded', () => {
    //let csBuilder = new CustomerBuilder();
    //csBuilder.loadCustomers(CUSTOMERS);
   // csBuilder.renderCustomers();
});


