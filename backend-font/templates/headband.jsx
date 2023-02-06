var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <meta charaset="utf-8" />
                <link rel="stylesheet" href="../assets/headband.css" />
                <title> Nom du site</title>
                <header>
                    <ul className="nav">
                        <li id="home">
                            <a href="#"><img src="settings.png" /></a>
                        </li><li id="login">
                            <a href="#">Login/Connection</a>
                            <ul className="subnav">
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Connection</a></li>
                            </ul>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
});