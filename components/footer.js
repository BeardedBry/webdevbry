class Footer extends HTMLElement {
    constructor() {
        super();
        this.date = new Date();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .container {
                    text-align: center;
                    margin-top: auto;
                }
            </style>
            <footer>
                <div class="container">
                        <p>Web Dev Bry LLC &copy; Copyright ${this.date.getFullYear()}</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);