var Balance = React.createClass({
    componentDidMount() {
        this.controller.renderItems();
    },
    renderItem(it) {
        return (<section key={it.tokenId} className="BALANCE-ITEM">
            <figure>
                <img src={it.name ? (it.image || "/assets/img/missingno.png") : "/assets/img/missingno.png"}></img>
            </figure>
            <section className="ASSET-INFO">
                <p>#{it.tokenId} - {it.name ? window.shortenWord(it.name) : "MISSINGNO."}</p>
                <a href={this.state.etherscanLink + it.tokenId} target="_blank">{window.shortenWord(this.state.tokenAddress, 18)}</a>
            </section>
            <section className="ASSET-ACTION">
                <a href="javascript:;">Send</a>
                <a className="OS" target="_blank" href={this.state.openSeaLink + it.tokenId}>OpenSea</a>
            </section>
        </section>);
    },
    render() {
        return (<section className="BALANCE-ITEMS">
            {this.state && this.state.items && Object.values(this.state.items).map(this.renderItem)}
            <section className="BALANCE-LOAD">
                <a className="BALANCE-LOAD-FX" href="javascript:;" onClick={this.controller.renderItems}>Refresh &#8635;</a>
            </section>
        </section>);
    }
});