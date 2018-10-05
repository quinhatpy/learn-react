import React, { Component, Fragment } from 'react';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* fixed-top*/}
                <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-semi-dark navbar-shadow">
                    <div className="navbar-wrapper">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav flex-row position-relative">
                                <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="/"><i className="ft-menu font-large-1" /></a></li>
                                <li className="nav-item mr-auto">
                                    <a className="navbar-brand" href="index.html">
                                        <img className="brand-logo" alt="stack admin logo" src="images/logo/stack-logo-light.png" />
                                        <h2 className="brand-text">Stack</h2>
                                    </a>
                                </li>
                                <li className="nav-item d-none d-md-block nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="toggle-icon ft-toggle-right font-medium-3 white" data-ticon="ft-toggle-right" /></a></li>
                                <li className="nav-item d-md-none">
                                    <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-container content">
                            <div className="collapse navbar-collapse" id="navbar-mobile">
                                <ul className="nav navbar-nav mr-auto float-left">
                                    <li className="dropdown nav-item mega-dropdown"><a className="dropdown-toggle nav-link" href="/" data-toggle="dropdown">Mega</a>
                                        <ul className="mega-dropdown-menu dropdown-menu row">
                                            <li className="col-md-2">
                                                <h6 className="dropdown-menu-header text-uppercase mb-1"><i className="fa fa-newspaper-o" /> News</h6>
                                                <div id="mega-menu-carousel-example">
                                                    <div>
                                                        <img className="rounded img-fluid mb-1" src="images/slider/slider-2.png" alt="First slide" /><a className="news-title mb-0" href="/">Poster Frame PSD</a>
                                                        <p className="news-content">
                                                            <span className="font-small-2">January 26, 2016</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-md-3">
                                                <h6 className="dropdown-menu-header text-uppercase"><i className="fa fa-random" /> Drill down menu</h6>
                                                <ul className="drilldown-menu">
                                                    <li className="menu-list">
                                                        <ul>
                                                            <li>
                                                                <a className="dropdown-item" href="layout-2-columns.html"><i className="ft-file" /> Page layouts &amp; Templates</a>
                                                            </li>
                                                            <li><a href="/"><i className="ft-align-left" /> Multi level menu</a>
                                                                <ul>
                                                                    <li><a className="dropdown-item" href="/"><i className="fa fa-bookmark-o" />  Second level</a></li>
                                                                    <li><a href="/"><i className="fa fa-lemon-o" /> Second level menu</a>
                                                                        <ul>
                                                                            <li><a className="dropdown-item" href="/"><i className="fa fa-heart-o" />  Third level</a></li>
                                                                            <li><a className="dropdown-item" href="/"><i className="fa fa-file-o" /> Third level</a></li>
                                                                            <li><a className="dropdown-item" href="/"><i className="fa fa-trash-o" /> Third level</a></li>
                                                                            <li><a className="dropdown-item" href="/"><i className="fa fa-clock-o" /> Third level</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="/"><i className="fa fa-hdd-o" /> Second level, third link</a></li>
                                                                    <li><a className="dropdown-item" href="/"><i className="fa fa-floppy-o" /> Second level, fourth link</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="color-palette-primary.html"><i className="ft-camera" /> Color pallet system</a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="sk-2-columns.html"><i className="ft-edit" /> Page starter kit</a></li>
                                                            <li><a className="dropdown-item" href="changelog.html"><i className="ft-minimize-2" /> Change log</a></li>
                                                            <li>
                                                                <a className="dropdown-item" href="https://pixinvent.ticksy.com/"><i className="fa fa-life-ring" /> Customer support center</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <h6 className="dropdown-menu-header text-uppercase"><i className="fa fa-list-ul" /> Accordion</h6>
                                                <div id="accordionWrap" role="tablist" aria-multiselectable="true">
                                                    <div className="card border-0 box-shadow-0 collapse-icon accordion-icon-rotate">
                                                        <div className="card-header p-0 pb-2 border-0" id="headingOne" role="tab"><a data-toggle="collapse" data-parent="#accordionWrap" href="#accordionOne" aria-expanded="true" aria-controls="accordionOne">Accordion Item #1</a></div>
                                                        <div className="card-collapse collapse show" id="accordionOne" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true">
                                                            <div className="card-content">
                                                                <p className="accordion-text text-small-3">Caramels dessert chocolate cake pastry jujubes bonbon.
                                                                  Jelly wafer jelly beans. Caramels chocolate cake liquorice
                            cake wafer jelly beans croissant apple pie.</p>
                                                            </div>
                                                        </div>
                                                        <div className="card-header p-0 pb-2 border-0" id="headingTwo" role="tab"><a className="collapsed" data-toggle="collapse" data-parent="#accordionWrap" href="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">Accordion Item #2</a></div>
                                                        <div className="card-collapse collapse" id="accordionTwo" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                                            <div className="card-content">
                                                                <p className="accordion-text">Sugar plum bear claw oat cake chocolate jelly tiramisu
                                                                  dessert pie. Tiramisu macaroon muffin jelly marshmallow
                            cake. Pastry oat cake chupa chups.</p>
                                                            </div>
                                                        </div>
                                                        <div className="card-header p-0 pb-2 border-0" id="headingThree" role="tab"><a className="collapsed" data-toggle="collapse" data-parent="#accordionWrap" href="#accordionThree" aria-expanded="false" aria-controls="accordionThree">Accordion Item #3</a></div>
                                                        <div className="card-collapse collapse" id="accordionThree" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                                            <div className="card-content">
                                                                <p className="accordion-text">Candy cupcake sugar plum oat cake wafer marzipan jujubes
                                                                  lollipop macaroon. Cake dragée jujubes donut chocolate
                            bar chocolate cake cupcake chocolate topping.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-md-4">
                                                <h6 className="dropdown-menu-header text-uppercase mb-1"><i className="fa fa-envelope-o" /> Contact Us</h6>
                                                <form className="form form-horizontal">
                                                    <div className="form-body">
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label" htmlFor="inputName1">Name</label>
                                                            <div className="col-sm-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input className="form-control" type="text" id="inputName1" placeholder="John Doe" />
                                                                    <div className="form-control-position pl-1"><i className="fa fa-user-o" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label" htmlFor="inputEmail1">Email</label>
                                                            <div className="col-sm-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input className="form-control" type="email" id="inputEmail1" placeholder="john@example.com" />
                                                                    <div className="form-control-position pl-1"><i className="fa fa-envelope-o" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label" htmlFor="inputMessage1">Message</label>
                                                            <div className="col-sm-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <textarea className="form-control" id="inputMessage1" rows={2} placeholder="Simple Textarea" defaultValue={""} />
                                                                    <div className="form-control-position pl-1"><i className="fa fa-commenting-o" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12 mb-1">
                                                                <button className="btn btn-primary float-right" type="button"><i className="fa fa-paper-plane-o" /> Send</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item d-none d-md-block"><a className="nav-link nav-link-expand" href="/"><i className="ficon ft-maximize" /></a></li>
                                    <li className="nav-item nav-search"><a className="nav-link nav-link-search" href="/"><i className="ficon ft-search" /></a>
                                        <div className="search-input">
                                            <input className="input" type="text" placeholder="Explore Stack..." />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav float-right">
                                    <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-gb" /><span className="selected-language" /></a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="/"><i className="flag-icon flag-icon-gb" /> English</a>
                                            <a className="dropdown-item" href="/"><i className="flag-icon flag-icon-fr" /> French</a>
                                            <a className="dropdown-item" href="/"><i className="flag-icon flag-icon-cn" /> Chinese</a>
                                            <a className="dropdown-item" href="/"><i className="flag-icon flag-icon-de" /> German</a>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-notification nav-item">
                                        <a className="nav-link nav-link-label" href="/" data-toggle="dropdown"><i className="ficon ft-bell" />
                                            <span className="badge badge-pill badge-default badge-danger badge-default badge-up">5</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                            <li className="dropdown-menu-header">
                                                <h6 className="dropdown-header m-0">
                                                    <span className="grey darken-2">Notifications</span>
                                                    <span className="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                                                </h6>
                                            </li>
                                            <li className="scrollable-container media-list">
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left align-self-center"><i className="ft-plus-square icon-bg-circle bg-cyan" /></div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">You have new order!</h6>
                                                            <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left align-self-center"><i className="ft-download-cloud icon-bg-circle bg-red bg-darken-1" /></div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading red darken-1">99% Server load</h6>
                                                            <p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Five hour ago</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left align-self-center"><i className="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3" /></div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading yellow darken-3">Warning notifixation</h6>
                                                            <p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Today</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left align-self-center"><i className="ft-check-circle icon-bg-circle bg-cyan" /></div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Complete the task</h6>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Last week</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left align-self-center"><i className="ft-file icon-bg-circle bg-teal" /></div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Generate monthly report</h6>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Last month</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="//">Read all notifications</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown dropdown-notification nav-item">
                                        <a className="nav-link nav-link-label" href="/" data-toggle="dropdown"><i className="ficon ft-mail" />
                                            <span className="badge badge-pill badge-default badge-warning badge-default badge-up">3</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                            <li className="dropdown-menu-header">
                                                <h6 className="dropdown-header m-0">
                                                    <span className="grey darken-2">Messages</span>
                                                    <span className="notification-tag badge badge-default badge-warning float-right m-0">4 New</span>
                                                </h6>
                                            </li>
                                            <li className="scrollable-container media-list">
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                <img src="images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Margaret Govan</h6>
                                                            <p className="notification-text font-small-3 text-muted">I like your portfolio, let's start.</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Today</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <span className="avatar avatar-sm avatar-busy rounded-circle">
                                                                <img src="images/portrait/small/avatar-s-2.png" alt="avatar" /><i /></span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Bret Lezama</h6>
                                                            <p className="notification-text font-small-3 text-muted">I have seen your work, there is</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Tuesday</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                <img src="images/portrait/small/avatar-s-3.png" alt="avatar" /><i /></span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Carie Berra</h6>
                                                            <p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Friday</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="//">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <span className="avatar avatar-sm avatar-away rounded-circle">
                                                                <img src="images/portrait/small/avatar-s-6.png" alt="avatar" /><i /></span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Eric Alsobrook</h6>
                                                            <p className="notification-text font-small-3 text-muted">We have project party this saturday.</p>
                                                            <small>
                                                                <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">last month</time>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="//">Read all messages</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown dropdown-user nav-item">
                                        <a className="dropdown-toggle nav-link dropdown-user-link" href="/" data-toggle="dropdown">
                                            <span className="avatar avatar-online">
                                                <img src="images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                                            <span className="user-name">John Doe</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="user-profile.html"><i className="ft-user" /> Edit Profile</a>
                                            <a className="dropdown-item" href="email-application.html"><i className="ft-mail" /> My Inbox</a>
                                            <a className="dropdown-item" href="user-cards.html"><i className="ft-check-square" /> Task</a>
                                            <a className="dropdown-item" href="chat-application.html"><i className="ft-message-square" /> Chats</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="login-with-bg-image.html"><i className="ft-power" /> Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* ////////////////////////////////////////////////////////////////////////////*/}
                <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
                    <div className="main-menu-content">
                        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                            <li className=" navigation-header">
                                <span>General</span><i className=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="General" />
                            </li>
                            <li className=" nav-item"><a href="index.html"><i className="ft-home" /><span className="menu-title" data-i18n>Dashboard</span><span className="badge badge badge-primary badge-pill float-right mr-2">3</span></a>
                                <ul className="menu-content">
                                    <li className="active"><a className="menu-item" href="dashboard-ecommerce.html">eCommerce</a>
                                    </li>
                                    <li><a className="menu-item" href="dashboard-analytics.html">Analytics</a>
                                    </li>
                                    <li><a className="menu-item" href="dashboard-fitness.html">Fitness</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-monitor" /><span className="menu-title" data-i18n>Templates</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">Vertical</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="../vertical-modern-menu-template">Modern Menu</a>
                                            </li>
                                            <li><a className="menu-item" href="../vertical-menu-template">Semi Light</a>
                                            </li>
                                            <li><a className="menu-item" href="../vertical-menu-template-semi-dark">Semi Dark</a>
                                            </li>
                                            <li><a className="menu-item" href="../vertical-menu-template-nav-dark">Nav Dark</a>
                                            </li>
                                            <li><a className="menu-item" href="../vertical-menu-template-light">Light</a>
                                            </li>
                                            <li><a className="menu-item" href="../vertical-overlay-menu-template">Overlay Menu</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Horizontal</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="../horizontal-menu-template">Classic</a>
                                            </li>
                                            <li><a className="menu-item" href="../horizontal-menu-template-nav">Nav Dark</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-layout" /><span className="menu-title" data-i18n>Layouts</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">Page Layouts</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="layout-1-column.html">1 column</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-2-columns.html">2 columns</a>
                                            </li>
                                            <li><a className="menu-item" href="/">Content Det. Sidebar</a>
                                                <ul className="menu-content">
                                                    <li><a className="menu-item" href="layout-content-detached-left-sidebar.html">Detached left sidebar</a>
                                                    </li>
                                                    <li><a className="menu-item" href="layout-content-detached-left-sticky-sidebar.html">Detached sticky left sidebar</a>
                                                    </li>
                                                    <li><a className="menu-item" href="layout-content-detached-right-sidebar.html">Detached right sidebar</a>
                                                    </li>
                                                    <li><a className="menu-item" href="layout-content-detached-right-sticky-sidebar.html">Detached sticky right sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navigation-divider" />
                                            <li><a className="menu-item" href="layout-fixed-navbar.html">Fixed navbar</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-fixed-navigation.html">Fixed navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-fixed-navbar-navigation.html">Fixed navbar &amp; navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-fixed-navbar-footer.html">Fixed navbar &amp; footer</a>
                                            </li>
                                            <li className="navigation-divider" />
                                            <li><a className="menu-item" href="layout-fixed.html">Fixed layout</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-boxed.html">Boxed layout</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-static.html">Static layout</a>
                                            </li>
                                            <li className="navigation-divider" />
                                            <li><a className="menu-item" href="layout-light.html">Light layout</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-dark.html">Dark layout</a>
                                            </li>
                                            <li><a className="menu-item" href="layout-semi-dark.html">Semi dark layout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Navbars</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="navbar-light.html">Navbar Light</a>
                                            </li>
                                            <li><a className="menu-item" href="navbar-dark.html">Navbar Dark</a>
                                            </li>
                                            <li><a className="menu-item" href="navbar-semi-dark.html">Navbar Semi Dark</a>
                                            </li>
                                            <li><a className="menu-item" href="navbar-brand-center.html">Brand Center</a>
                                            </li>
                                            <li><a className="menu-item" href="navbar-fixed-top.html">Fixed Top</a>
                                            </li>
                                            <li><a className="menu-item" href="/">Hide on Scroll</a>
                                                <ul className="menu-content">
                                                    <li><a className="menu-item" href="navbar-hide-on-scroll-top.html">Hide on Scroll Top</a>
                                                    </li>
                                                    <li><a className="menu-item" href="navbar-hide-on-scroll-bottom.html">Hide on Scroll Bottom</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="menu-item" href="navbar-components.html">Navbar Components</a>
                                            </li>
                                            <li><a className="menu-item" href="navbar-styling.html">Navbar Styling</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Vertical Nav</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="/">Navigation Types</a>
                                                <ul className="menu-content">
                                                    <li><a className="menu-item" href="../vertical-menu-template">Vertical Menu</a>
                                                    </li>
                                                    <li><a className="menu-item" href="../vertical-overlay-menu-template">Vertical Overlay</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-compact-menu.html">Compact Menu</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-fixed.html">Fixed Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-static.html">Static Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-light.html">Navigation Light</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-dark.html">Navigation Dark</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-accordion.html">Accordion Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-collapsible.html">Collapsible Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-flipped.html">Flipped Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-native-scroll.html">Native scroll</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-right-side-icon.html">Right side icons</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-bordered.html">Bordered Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-disabled-link.html">Disabled Navigation</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-styling.html">Navigation Styling</a>
                                            </li>
                                            <li><a className="menu-item" href="vertical-nav-tags-pills.html">Tags &amp; Pills</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Horizontal Nav</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="/">Navigation Types</a>
                                                <ul className="menu-content">
                                                    <li><a className="menu-item" href="../horizontal-menu-template">Classic</a>
                                                    </li>
                                                    <li><a className="menu-item" href="../horizontal-menu-template-nav">Nav Dark</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Page Headers</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="headers-breadcrumbs-basic.html">Breadcrumbs basic</a>
                                            </li>
                                            <li><a className="menu-item" href="headers-breadcrumbs-top.html">Breadcrumbs top</a>
                                            </li>
                                            <li><a className="menu-item" href="headers-breadcrumbs-bottom.html">Breadcrumbs bottom</a>
                                            </li>
                                            <li><a className="menu-item" href="headers-breadcrumbs-with-button.html">Breadcrumbs with button</a>
                                            </li>
                                            <li><a className="menu-item" href="headers-breadcrumbs-with-round-button.html">Breadcrumbs with round button 2</a>
                                            </li>
                                            <li><a className="menu-item" href="headers-breadcrumbs-with-stats.html">Breadcrumbs with stats</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Footers</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="footer-light.html">Footer Light</a>
                                            </li>
                                            <li><a className="menu-item" href="footer-dark.html">Footer Dark</a>
                                            </li>
                                            <li><a className="menu-item" href="footer-transparent.html">Footer Transparent</a>
                                            </li>
                                            <li><a className="menu-item" href="footer-fixed.html">Footer Fixed</a>
                                            </li>
                                            <li><a className="menu-item" href="footer-components.html">Footer Components</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-zap" /><span className="menu-title" data-i18n>Starter kit</span><span className="badge badge badge-danger badge-pill float-right mr-2">New</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-1-column.html">1 column</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-2-columns.html">2 columns</a>
                                    </li>
                                    <li><a className="menu-item" href="/">Content Det. Sidebar</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-content-detached-left-sidebar.html">Detached left sidebar</a>
                                            </li>
                                            <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-content-detached-left-sticky-sidebar.html">Detached sticky left sidebar</a>
                                            </li>
                                            <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-content-detached-right-sidebar.html">Detached right sidebar</a>
                                            </li>
                                            <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-content-detached-right-sticky-sidebar.html">Detached sticky right sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navigation-divider" />
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-fixed-navbar.html">Fixed navbar</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-fixed-navigation.html">Fixed navigation</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-fixed-navbar-navigation.html">Fixed navbar &amp; navigation</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-fixed-navbar-footer.html">Fixed navbar &amp; footer</a>
                                    </li>
                                    <li className="navigation-divider" />
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-fixed.html">Fixed layout</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-boxed.html">Boxed layout</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-static.html">Static layout</a>
                                    </li>
                                    <li className="navigation-divider" />
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-light.html">Light layout</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-dark.html">Dark layout</a>
                                    </li>
                                    <li><a className="menu-item" href="../../../starter-kit/ltr/vertical-modern-menu-template/layout-semi-dark.html">Semi dark layout</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" navigation-header">
                                <span>Apps</span><i className=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="Apps" />
                            </li>
                            <li className=" nav-item"><a href="email-application.html"><i className="ft-mail" /><span className="menu-title" data-i18n>Email Application</span></a>
                            </li>
                            <li className=" nav-item"><a href="chat-application.html"><i className="ft-message-square" /><span className="menu-title" data-i18n>Chat Application</span></a>
                            </li>
                            <li className=" nav-item"><a href="project-summary.html"><i className="ft-airplay" /><span className="menu-title" data-i18n>Project Summary</span></a>
                            </li>
                            <li className=" nav-item"><a href="invoice-template.html"><i className="ft-printer" /><span className="menu-title" data-i18n>Invoice Template</span></a>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-share" /><span className="menu-title" data-i18n>Timelines</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="timeline-center.html">Timelines Center</a>
                                    </li>
                                    <li><a className="menu-item" href="timeline-horizontal.html">Timelines Horizontal</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-user" /><span className="menu-title" data-i18n>Users</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="user-profile.html">Users Profile</a>
                                    </li>
                                    <li><a className="menu-item" href="user-cards.html">Users Cards</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-plus-square" /><span className="menu-title" data-i18n>Calender</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="full-calender-basic.html">Full Calender Basic</a>
                                    </li>
                                    <li><a className="menu-item" href="full-calender-events.html">Full Calender Events</a>
                                    </li>
                                    <li><a className="menu-item" href="full-calender-advance.html">Full Calender Advance</a>
                                    </li>
                                    <li><a className="menu-item" href="full-calender-extra.html">Full Calender Extra</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-image" /><span className="menu-title" data-i18n>Gallery</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="gallery-grid.html">Gallery Grid</a>
                                    </li>
                                    <li><a className="menu-item" href="gallery-grid-with-desc.html">Gallery Grid with Desc</a>
                                    </li>
                                    <li><a className="menu-item" href="gallery-masonry.html">Masonry Gallery</a>
                                    </li>
                                    <li><a className="menu-item" href="gallery-masonry-with-desc.html">Masonry Gallery with Desc</a>
                                    </li>
                                    <li><a className="menu-item" href="gallery-hover-effects.html">Hover Effects</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-search" /><span className="menu-title" data-i18n>Search</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="search-page.html">Search Page</a>
                                    </li>
                                    <li><a className="menu-item" href="search-website.html">Search Website</a>
                                    </li>
                                    <li><a className="menu-item" href="search-images.html">Search Images</a>
                                    </li>
                                    <li><a className="menu-item" href="search-videos.html">Search Videos</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-unlock" /><span className="menu-title" data-i18n>Authentication</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="login-simple.html">Login Simple</a>
                                    </li>
                                    <li><a className="menu-item" href="login-with-bg.html">Login with Bg</a>
                                    </li>
                                    <li><a className="menu-item" href="login-with-bg-image.html">Login with Bg Image</a>
                                    </li>
                                    <li><a className="menu-item" href="register-simple.html">Register Simple</a>
                                    </li>
                                    <li><a className="menu-item" href="register-with-bg.html">Register with Bg</a>
                                    </li>
                                    <li><a className="menu-item" href="register-with-bg-image.html">Register with Bg Image</a>
                                    </li>
                                    <li><a className="menu-item" href="unlock-user.html">Unlock User</a>
                                    </li>
                                    <li><a className="menu-item" href="recover-password.html">Recover Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-alert-triangle" /><span className="menu-title" data-i18n>Error</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="error-400.html">Error 400</a>
                                    </li>
                                    <li><a className="menu-item" href="error-401.html">Error 401</a>
                                    </li>
                                    <li><a className="menu-item" href="error-403.html">Error 403</a>
                                    </li>
                                    <li><a className="menu-item" href="error-404.html">Error 404</a>
                                    </li>
                                    <li><a className="menu-item" href="error-500.html">Error 500</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-watch" /><span className="menu-title" data-i18n>Coming Soon</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="coming-soon-flat.html">Flat</a>
                                    </li>
                                    <li><a className="menu-item" href="coming-soon-bg-image.html">Bg image</a>
                                    </li>
                                    <li><a className="menu-item" href="coming-soon-bg-video.html">Bg video</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="under-maintenance.html"><i className="ft-cloud-off" /><span className="menu-title" data-i18n>Maintenance</span></a>
                            </li>
                            <li className=" navigation-header">
                                <span>UI</span><i className="ft-droplet ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="UI" />
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-globe" /><span className="menu-title" data-i18n>Content</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="content-grid.html">Grid</a>
                                    </li>
                                    <li><a className="menu-item" href="content-typography.html">Typography</a>
                                    </li>
                                    <li><a className="menu-item" href="content-text-utilities.html">Text utilities</a>
                                    </li>
                                    <li><a className="menu-item" href="content-syntax-highlighter.html">Syntax highlighter</a>
                                    </li>
                                    <li><a className="menu-item" href="content-helper-classes.html">Helper classes</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-square" /><span className="menu-title" data-i18n>Cards</span><span className="badge badge badge-pill badge-success float-right mr-2">Hot</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="card-bootstrap.html">Bootstrap</a>
                                    </li>
                                    <li><a className="menu-item" href="card-headings.html">Headings</a>
                                    </li>
                                    <li><a className="menu-item" href="card-options.html">Options</a>
                                    </li>
                                    <li><a className="menu-item" href="card-actions.html">Action</a>
                                    </li>
                                    <li><a className="menu-item" href="card-draggable.html">Draggable</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-layers" /><span className="menu-title" data-i18n>Advance Cards</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="card-statistics.html">Statistics</a>
                                    </li>
                                    <li><a className="menu-item" href="card-weather.html">Weather</a>
                                    </li>
                                    <li><a className="menu-item" href="card-charts.html">Charts</a>
                                    </li>
                                    <li><a className="menu-item" href="card-maps.html">Maps</a>
                                    </li>
                                    <li><a className="menu-item" href="card-social.html">Social</a>
                                    </li>
                                    <li><a className="menu-item" href="card-ecommerce.html">E-Commerce</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-droplet" /><span className="menu-title" data-i18n>Color Palette</span><span className="badge badge badge-warning badge-pill float-right mr-2">14</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="color-palette-primary.html">Primary palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-danger.html">Danger palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-success.html">Success palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-warning.html">Warning palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-info.html">Info palette</a>
                                    </li>
                                    <li className="navigation-divider" />
                                    <li><a className="menu-item" href="color-palette-red.html">Red palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-pink.html">Pink palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-purple.html">Purple palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-blue.html">Blue palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-cyan.html">Cyan palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-teal.html">Teal palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-yellow.html">Yellow palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-amber.html">Amber palette</a>
                                    </li>
                                    <li><a className="menu-item" href="color-palette-blue-grey.html">Blue Grey palette</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-eye" /><span className="menu-title" data-i18n>Icons</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="icons-feather.html">Feather</a>
                                    </li>
                                    <li><a className="menu-item" href="icons-font-awesome.html">Font Awesome</a>
                                    </li>
                                    <li><a className="menu-item" href="icons-simple-line-icons.html">Simple Line Icons</a>
                                    </li>
                                    <li><a className="menu-item" href="icons-meteocons.html">Meteocons</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" navigation-header">
                                <span>Components</span><i className=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="Components" />
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-briefcase" /><span className="menu-title" data-i18n>Bootstrap Components</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="component-alerts.html">Alerts</a>
                                    </li>
                                    <li><a className="menu-item" href="component-callout.html">Callout</a>
                                    </li>
                                    <li><a className="menu-item" href="/">Buttons</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="component-buttons-basic.html">Basic Buttons</a>
                                            </li>
                                            <li><a className="menu-item" href="component-buttons-extended.html">Extended Buttons</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="component-carousel.html">Carousel</a>
                                    </li>
                                    <li><a className="menu-item" href="component-collapse.html">Collapse</a>
                                    </li>
                                    <li><a className="menu-item" href="component-dropdowns.html">Dropdowns</a>
                                    </li>
                                    <li><a className="menu-item" href="component-list-group.html">List Group</a>
                                    </li>
                                    <li><a className="menu-item" href="component-modals.html">Modals</a>
                                    </li>
                                    <li><a className="menu-item" href="component-pagination.html">Pagination</a>
                                    </li>
                                    <li><a className="menu-item" href="component-navs-component.html">Navs Component</a>
                                    </li>
                                    <li><a className="menu-item" href="component-tabs-component.html">Tabs Component</a>
                                    </li>
                                    <li><a className="menu-item" href="component-pills-component.html">Pills Component</a>
                                    </li>
                                    <li><a className="menu-item" href="component-tooltips.html">Tooltips</a>
                                    </li>
                                    <li><a className="menu-item" href="component-popovers.html">Popovers</a>
                                    </li>
                                    <li><a className="menu-item" href="component-badges.html">Badges</a>
                                    </li>
                                    <li><a className="menu-item" href="component-pill-badges.html">Pill Badges</a>
                                    </li>
                                    <li><a className="menu-item" href="component-progress.html">Progress</a>
                                    </li>
                                    <li><a className="menu-item" href="component-media-objects.html">Media Objects</a>
                                    </li>
                                    <li><a className="menu-item" href="component-scrollable.html">Scrollable</a>
                                    </li>
                                    <li><a className="menu-item" href="component-spinners.html">Spinners</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-box" /><span className="menu-title" data-i18n>Extra Components</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="ex-component-sweet-alerts.html">Sweet Alerts</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-ratings.html">Ratings</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-toastr.html">Toastr</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-noui-slider.html">NoUI Slider</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-knob.html">Knob</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-block-ui.html">Block UI</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-date-time-picker.html">DateTime Picker</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-file-uploader-dropzone.html">File Uploader</a>
                                    </li>
                                    <li><a className="menu-item" href="ex-component-image-cropper.html">Image Cropper</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-edit" /><span className="menu-title" data-i18n>Forms</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">Form Elements</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="form-inputs.html">Form Inputs</a>
                                            </li>
                                            <li><a className="menu-item" href="form-input-groups.html">Input Groups</a>
                                            </li>
                                            <li><a className="menu-item" href="form-input-grid.html">Input Grid</a>
                                            </li>
                                            <li><a className="menu-item" href="form-extended-inputs.html">Extended Inputs</a>
                                            </li>
                                            <li><a className="menu-item" href="form-checkboxes-radios.html">Checkboxes &amp; Radios</a>
                                            </li>
                                            <li><a className="menu-item" href="form-switch.html">Switch</a>
                                            </li>
                                            <li><a className="menu-item" href="form-select2.html">Select2</a>
                                            </li>
                                            <li><a className="menu-item" href="form-tags-input.html">Tags Input</a>
                                            </li>
                                            <li><a className="menu-item" href="form-validation.html">Validation</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Form Layouts</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="form-layout-basic.html">Basic Forms</a>
                                            </li>
                                            <li><a className="menu-item" href="form-layout-horizontal.html">Horizontal Forms</a>
                                            </li>
                                            <li><a className="menu-item" href="form-layout-hidden-labels.html">Hidden Labels</a>
                                            </li>
                                            <li><a className="menu-item" href="form-layout-form-actions.html">Form Actions</a>
                                            </li>
                                            <li><a className="menu-item" href="form-layout-bordered.html">Bordered</a>
                                            </li>
                                            <li><a className="menu-item" href="form-layout-striped-rows.html">Striped Rows</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="form-wizard.html">Form Wizard</a>
                                    </li>
                                    <li><a className="menu-item" href="form-repeater.html">Form Repeater</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-grid" /><span className="menu-title" data-i18n>Tables</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">Bootstrap Tables</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="table-basic.html">Basic Tables</a>
                                            </li>
                                            <li><a className="menu-item" href="table-border.html">Table Border</a>
                                            </li>
                                            <li><a className="menu-item" href="table-sizing.html">Table Sizing</a>
                                            </li>
                                            <li><a className="menu-item" href="table-styling.html">Table Styling</a>
                                            </li>
                                            <li><a className="menu-item" href="table-components.html">Table Components</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">DataTables</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="dt-basic-initialization.html">Basic Initialisation</a>
                                            </li>
                                            <li><a className="menu-item" href="dt-advanced-initialization.html">Advanced initialisation</a>
                                            </li>
                                            <li><a className="menu-item" href="dt-styling.html">Styling</a>
                                            </li>
                                            <li><a className="menu-item" href="dt-data-sources.html">Data Sources</a>
                                            </li>
                                            <li><a className="menu-item" href="dt-api.html">API</a>
                                            </li>
                                            <li><a className="menu-item" href="/" data-i18n="nav.datatable_extensions.main">DataTables Ext.</a>
                                                <ul className="menu-content">
                                                    <li><a className="menu-item" href="dt-extensions-autofill.html" data-i18n="nav.datatable_extensions.dt_extensions_autofill">AutoFill</a>
                                                    </li>
                                                    <li><a className="menu-item" href="/" data-i18n="nav.datatable_extensions.datatable_buttons.main">Buttons</a>
                                                        <ul className="menu-content">
                                                            <li><a className="menu-item" href="dt-extensions-buttons-basic.html" data-i18n="nav.datatable_extensions.datatable_buttons.dt_extensions_buttons_basic">Basic Buttons</a>
                                                            </li>
                                                            <li><a className="menu-item" href="dt-extensions-buttons-html-5-data-export.html" data-i18n="nav.datatable_extensions.datatable_buttons.dt_extensions_buttons_html_5_data_export">HTML 5 Data Export</a>
                                                            </li>
                                                            <li><a className="menu-item" href="dt-extensions-buttons-flash-data-export.html" data-i18n="nav.datatable_extensions.datatable_buttons.dt_extensions_buttons_flash_data_export">Flash Data Export</a>
                                                            </li>
                                                            <li><a className="menu-item" href="dt-extensions-buttons-column-visibility.html" data-i18n="nav.datatable_extensions.datatable_buttons.dt_extensions_buttons_column_visibility">Column Visibility</a>
                                                            </li>
                                                            <li><a className="menu-item" href="dt-extensions-buttons-print.html" data-i18n="nav.datatable_extensions.datatable_buttons.dt_extensions_buttons_print">Print</a>
                                                            </li>
                                                            <li><a className="menu-item" href="dt-extensions-buttons-api.html" data-i18n="nav.datatable_extensions.datatable_buttons.dt_extensions_buttons_api">API</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-column-reorder.html" data-i18n="nav.datatable_extensions.dt_extensions_column_reorder">Column Reorder</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-fixed-columns.html" data-i18n="nav.datatable_extensions.dt_extensions_fixed_columns">Fixed Columns</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-key-table.html" data-i18n="nav.datatable_extensions.dt_extensions_key_table">Key Table</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-row-reorder.html" data-i18n="nav.datatable_extensions.dt_extensions_row_reorder">Row Reorder</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-select.html" data-i18n="nav.datatable_extensions.dt_extensions_select">Select</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-fix-header.html" data-i18n="nav.datatable_extensions.dt_extensions_fix_header">Fix Header</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-responsive.html" data-i18n="nav.datatable_extensions.dt_extensions_responsive">Responsive</a>
                                                    </li>
                                                    <li><a className="menu-item" href="dt-extensions-column-visibility.html" data-i18n="nav.datatable_extensions.dt_extensions_column_visibility">Column Visibility</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="table-jsgrid.html">jsGrid</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-bar-chart-2" /><span className="menu-title" data-i18n>Charts</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">Echarts</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="echarts-line-area-charts.html">Line &amp; Area charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-bar-column-charts.html">Bar &amp; Column charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-pie-doughnut-charts.html">Pie &amp; Doughnut charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-scatter-charts.html">Scatter charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-radar-chord-charts.html">Radar &amp; Chord charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-funnel-gauges-charts.html">Funnel &amp; Gauges charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-combination-charts.html">Combination charts</a>
                                            </li>
                                            <li><a className="menu-item" href="echarts-advance-charts.html">Advance charts</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Chartjs</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="chartjs-line-charts.html">Line charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartjs-bar-charts.html">Bar charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartjs-pie-doughnut-charts.html">Pie &amp; Doughnut charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartjs-scatter-charts.html">Scatter charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartjs-polar-radar-charts.html">Polar &amp; Radar charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartjs-advance-charts.html">Advance charts</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="morris-charts.html">Morris Charts</a>
                                    </li>
                                    <li><a className="menu-item" href="/">Flot Charts</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="flot-line-charts.html">Line charts</a>
                                            </li>
                                            <li><a className="menu-item" href="flot-bar-charts.html">Bar charts</a>
                                            </li>
                                            <li><a className="menu-item" href="flot-pie-charts.html">Pie charts</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="/">Chartist</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="chartist-line-charts.html">Line charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartist-bar-charts.html">Bar charts</a>
                                            </li>
                                            <li><a className="menu-item" href="chartist-pie-charts.html">Pie charts</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-map" /><span className="menu-title" data-i18n>Maps</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">google Maps</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="gmaps-basic-maps.html">Maps</a>
                                            </li>
                                            <li><a className="menu-item" href="gmaps-services.html">Services</a>
                                            </li>
                                            <li><a className="menu-item" href="gmaps-overlays.html">Overlays</a>
                                            </li>
                                            <li><a className="menu-item" href="gmaps-routes.html">Routes</a>
                                            </li>
                                            <li><a className="menu-item" href="gmaps-utils.html">Utils</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="vector-maps-jvector.html">jVector Map</a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" navigation-header">
                                <span>Others</span><i className=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="Others" />
                            </li>
                            <li className=" nav-item"><a href="/"><i className="ft-align-left" /><span className="menu-title" data-i18n>Menu levels</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="/">Second level</a>
                                    </li>
                                    <li><a className="menu-item" href="/">Second level child</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="/">Third level</a>
                                            </li>
                                            <li><a className="menu-item" href="/">Third level child</a>
                                                <ul className="menu-content">
                                                    <li><a className="menu-item" href="/">Fourth level</a>
                                                    </li>
                                                    <li><a className="menu-item" href="/">Fourth level</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nav-item"><a href="changelog.html"><i className="ft-file" /><span className="menu-title" data-i18n>Changelog</span><span className="badge badge badge-pill badge-info float-right">3.0</span></a>
                            </li>
                            <li className="disabled nav-item"><a href="/"><i className="ft-slash" /><span className="menu-title" data-i18n>Disabled Menu</span></a>
                            </li>
                            <li className=" nav-item"><a href="https://pixinvent.ticksy.com/"><i className="ft-life-buoy" /><span className="menu-title" data-i18n>Raise Support</span></a>
                            </li>
                            <li className=" nav-item">
                                <a href="https://pixinvent.com/stack-bootstrap-admin-template/documentation"><i className="ft-folder" />
                                    <span className="menu-title" data-i18n>Documentation</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-header row">
                        </div>
                        <div className="content-body">
                            {/* Stats */}
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media align-items-stretch">
                                                <div className="p-2 text-center bg-primary bg-darken-2">
                                                    <i className="icon-camera font-large-2 white" />
                                                </div>
                                                <div className="p-2 bg-gradient-x-primary white media-body">
                                                    <h5>Products</h5>
                                                    <h5 className="text-bold-400 mb-0"><i className="ft-plus" /> 28</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media align-items-stretch">
                                                <div className="p-2 text-center bg-danger bg-darken-2">
                                                    <i className="icon-user font-large-2 white" />
                                                </div>
                                                <div className="p-2 bg-gradient-x-danger white media-body">
                                                    <h5>New Users</h5>
                                                    <h5 className="text-bold-400 mb-0"><i className="ft-arrow-up" />1,238</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media align-items-stretch">
                                                <div className="p-2 text-center bg-warning bg-darken-2">
                                                    <i className="icon-basket-loaded font-large-2 white" />
                                                </div>
                                                <div className="p-2 bg-gradient-x-warning white media-body">
                                                    <h5>New Orders</h5>
                                                    <h5 className="text-bold-400 mb-0"><i className="ft-arrow-down" /> 4,658</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media align-items-stretch">
                                                <div className="p-2 text-center bg-success bg-darken-2">
                                                    <i className="icon-wallet font-large-2 white" />
                                                </div>
                                                <div className="p-2 bg-gradient-x-success white media-body">
                                                    <h5>Total Profit</h5>
                                                    <h5 className="text-bold-400 mb-0"><i className="ft-arrow-up" /> 5.6 M</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Stats */}
                            {/*Product sale & buyers */}
                            <div className="row match-height">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Products Sales</h4>
                                            <a className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div id="products-sales" className="height-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Recent Buyers</h4>
                                            <a className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content px-1">
                                            <div id="recent-buyers" className="media-list height-300 position-relative">
                                                <a href="/" className="media border-0">
                                                    <div className="media-left pr-1">
                                                        <span className="avatar avatar-md avatar-online">
                                                            <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-7.png" alt="Generic placeholder image1" />
                                                        </span>
                                                    </div>
                                                    <div className="media-body w-100">
                                                        <h6 className="list-group-item-heading">Kristopher Candy
                        <span className="font-medium-4 float-right pt-1">$1,021</span>
                                                        </h6>
                                                        <p className="list-group-item-text mb-0">
                                                            <span className="badge badge-primary">Electronics</span>
                                                            <span className="badge badge-warning ml-1">Decor</span>
                                                        </p>
                                                    </div>
                                                </a>
                                                <a href="/" className="media border-0">
                                                    <div className="media-left pr-1">
                                                        <span className="avatar avatar-md avatar-away">
                                                            <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-8.png" alt="Generic placeholder image2" />
                                                            <i />
                                                        </span>
                                                    </div>
                                                    <div className="media-body w-100">
                                                        <h6 className="list-group-item-heading">Lawrence Fowler
                        <span className="font-medium-4 float-right pt-1">$2,021</span>
                                                        </h6>
                                                        <p className="list-group-item-text mb-0">
                                                            <span className="badge badge-danger">Appliances</span>
                                                        </p>
                                                    </div>
                                                </a>
                                                <a href="/" className="media border-0">
                                                    <div className="media-left pr-1">
                                                        <span className="avatar avatar-md avatar-busy">
                                                            <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-9.png" alt="Generic placeholder image3" />
                                                            <i />
                                                        </span>
                                                    </div>
                                                    <div className="media-body w-100">
                                                        <h6 className="list-group-item-heading">Linda Olson
                        <span className="font-medium-4 float-right pt-1">$1,112</span>
                                                        </h6>
                                                        <p className="list-group-item-text mb-0">
                                                            <span className="badge badge-primary">Electronics</span>
                                                            <span className="badge badge-success ml-1">Office</span>
                                                        </p>
                                                    </div>
                                                </a>
                                                <a href="/" className="media border-0">
                                                    <div className="media-left pr-1">
                                                        <span className="avatar avatar-md avatar-online">
                                                            <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-10.png" alt="Generic placeholder image4" />
                                                            <i />
                                                        </span>
                                                    </div>
                                                    <div className="media-body w-100">
                                                        <h6 className="list-group-item-heading">Roy Clark
                        <span className="font-medium-4 float-right pt-1">$2,815</span>
                                                        </h6>
                                                        <p className="list-group-item-text mb-0">
                                                            <span className="badge badge-warning">Decor</span>
                                                            <span className="badge badge-danger ml-1">Appliances</span>
                                                        </p>
                                                    </div>
                                                </a>
                                                <a href="/" className="media border-0">
                                                    <div className="media-left pr-1">
                                                        <span className="avatar avatar-md avatar-online">
                                                            <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-11.png" alt="Generic placeholder image5" />
                                                            <i />
                                                        </span>
                                                    </div>
                                                    <div className="media-body w-100">
                                                        <h6 className="list-group-item-heading">Kristopher Candy
                        <span className="font-medium-4 float-right pt-1">$2,021</span>
                                                        </h6>
                                                        <p className="list-group-item-text mb-0">
                                                            <span className="badge badge-primary">Electronics</span>
                                                            <span className="badge badge-warning ml-1">Decor</span>
                                                        </p>
                                                    </div>
                                                </a>
                                                <a href="/" className="media border-0">
                                                    <div className="media-left pr-1">
                                                        <span className="avatar avatar-md avatar-away">
                                                            <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-12.png" alt="Generic placeholder image6" />
                                                            <i />
                                                        </span>
                                                    </div>
                                                    <div className="media-body w-100">
                                                        <h6 className="list-group-item-heading">Lawrence Fowler
                        <span className="font-medium-4 float-right pt-1">$1,321</span>
                                                        </h6>
                                                        <p className="list-group-item-text mb-0">
                                                            <span className="badge badge-danger">Appliances</span>
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Product sale & buyers */}
                            {/*Recent Orders & Monthly Salse */}
                            <div className="row match-height">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Recent Orders</h4>
                                            <a className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p>Total paid invoices 240, unpaid 150.
                    <span className="float-right"><a href="project-summary.html" target="_blank">Invoice Summary <i className="ft-arrow-right" /></a></span>
                                                </p>
                                            </div>
                                            <div className="table-responsive">
                                                <table id="recent-orders" className="table table-hover mb-0 ps-container ps-theme-default">
                                                    <thead>
                                                        <tr>
                                                            <th>SKU</th>
                                                            <th>Invoice#</th>
                                                            <th>Customer Name</th>
                                                            <th>Status</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-truncate">PO-10521</td>
                                                            <td className="text-truncate"><a href="/">INV-001001</a></td>
                                                            <td className="text-truncate">Elizabeth W.</td>
                                                            <td className="text-truncate">
                                                                <span className="badge badge-default badge-success">Paid</span>
                                                            </td>
                                                            <td className="text-truncate">$ 1200.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-truncate">PO-532521</td>
                                                            <td className="text-truncate"><a href="/">INV-01112</a></td>
                                                            <td className="text-truncate">Doris R.</td>
                                                            <td className="text-truncate">
                                                                <span className="badge badge-default badge-warning">Overdue</span>
                                                            </td>
                                                            <td className="text-truncate">$ 5685.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-truncate">PO-05521</td>
                                                            <td className="text-truncate"><a href="/">INV-001012</a></td>
                                                            <td className="text-truncate">Andrew D.</td>
                                                            <td className="text-truncate">
                                                                <span className="badge badge-default badge-success">Paid</span>
                                                            </td>
                                                            <td className="text-truncate">$ 152.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-truncate">PO-15521</td>
                                                            <td className="text-truncate"><a href="/">INV-001401</a></td>
                                                            <td className="text-truncate">Megan S.</td>
                                                            <td className="text-truncate">
                                                                <span className="badge badge-default badge-success">Paid</span>
                                                            </td>
                                                            <td className="text-truncate">$ 1450.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-truncate">PO-32521</td>
                                                            <td className="text-truncate"><a href="/">INV-008101</a></td>
                                                            <td className="text-truncate">Walter R.</td>
                                                            <td className="text-truncate">
                                                                <span className="badge badge-default badge-warning">Overdue</span>
                                                            </td>
                                                            <td className="text-truncate">$ 685.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="card-body sales-growth-chart">
                                                <div id="monthly-sales" className="height-250" />
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="chart-title mb-1 text-center">
                                                <h6>Total monthly Sales.</h6>
                                            </div>
                                            <div className="chart-stats text-center">
                                                <a href="/" className="btn btn-sm btn-primary mr-1">Statistics <i className="ft-bar-chart" /></a>
                                                <span className="text-muted">for the last year.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/Recent Orders & Monthly Salse */}
                            {/* Social & Weather */}
                            <div className="row match-height">
                                <div className="col-xl-4 col-lg-12">
                                    <div className="card bg-gradient-x-danger">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="animated-weather-icons text-center float-left">
                                                    <svg version="1.1" id="cloudHailAlt2" className="climacon climacon_cloudHailAlt climacon-blue-grey climacon-darken-2 height-100" viewBox="15 15 70 70">
                                                        <g className="climacon_iconWrap climacon_iconWrap-cloudHailAlt">
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                                                                <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                                    <circle cx={42} cy="65.498" r={2} />
                                                                </g>
                                                                <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                                    <circle cx="49.999" cy="65.498" r={2} />
                                                                </g>
                                                                <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                                    <circle cx="57.998" cy="65.498" r={2} />
                                                                </g>
                                                                <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                                    <circle cx={42} cy="65.498" r={2} />
                                                                </g>
                                                                <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                                    <circle cx="49.999" cy="65.498" r={2} />
                                                                </g>
                                                                <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                                    <circle cx="57.998" cy="65.498" r={2} />
                                                                </g>
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.941v-4.381c2.39-1.384,3.999-3.961,3.999-6.92c0-4.417-3.581-8-7.998-8c-1.602,0-3.084,0.48-4.334,1.291c-1.23-5.317-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.55,6.728,3.999,8.924v4.916c-4.776-2.768-7.998-7.922-7.998-13.84c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.372,11.998,12C71.998,58.863,68.656,63.293,63.999,64.941z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="weather-details text-center">
                                                    <span className="block white darken-1">Snow</span>
                                                    <span className="font-large-2 block white darken-4">-5°</span>
                                                    <span className="font-medium-4 text-bold-500 white darken-1">London, UK</span>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-gradient-x-danger border-0">
                                                <div className="row">
                                                    <div className="col-4 text-center display-table-cell white">
                                                        <i className="me-wind font-large-1 lighten-3 align-middle" />
                                                        <span className="align-middle">2MPH</span>
                                                    </div>
                                                    <div className="col-4 text-center display-table-cell white">
                                                        <i className="me-sun2 font-large-1 lighten-3 align-middle" />
                                                        <span className="align-middle">2%</span>
                                                    </div>
                                                    <div className="col-4 text-center display-table-cell white">
                                                        <i className="me-thermometer font-large-1 lighten-3 align-middle" />
                                                        <span className="align-middle">13.0°</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="card bg-gradient-x-info white">
                                        <div className="card-content">
                                            <div className="card-body text-center">
                                                <div className="mb-2">
                                                    <i className="fa fa-twitter font-large-2" />
                                                </div>
                                                <div className="tweet-slider">
                                                    <ul>
                                                        <li>Congratulations to Rob Jones in accounting for winning our
                        <span className="yellow">#NFL</span> football pool!
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                        <li>Contests are a great thing to partner on. Partnerships immediately
                        <span className="yellow">#DOUBLE</span> the reach.
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                        <li>Puns, humor, and quotes are great content on
                        <span className="yellow">#Twitter</span>. Find some related to your business.
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                        <li>Are there
                        <span className="yellow">#common-sense</span> facts related to your business? Combine
                                                                                                                                                                                                                                                                                    them with a great photo.
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="card bg-gradient-x-primary white">
                                        <div className="card-content">
                                            <div className="card-body text-center">
                                                <div className="mb-2">
                                                    <i className="fa fa-facebook font-large-2" />
                                                </div>
                                                <div className="fb-post-slider">
                                                    <ul>
                                                        <li>Congratulations to Rob Jones in accounting for winning our
                                                          #NFL football pool!
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                        <li>Contests are a great thing to partner on. Partnerships immediately
                                                          #DOUBLE the reach.
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                        <li>Puns, humor, and quotes are great content on #Twitter. Find
                                                          some related to your business.
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                        <li>Are there #common-sense facts related to your business? Combine
                                                          them with a great photo.
                        <p className="text-italic pt-1">- John Doe</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Social & Weather */}
                            {/* Basic Horizontal Timeline */}
                            <div className="row match-height">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Horizontal Timeline</h4>
                                            <a className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <section className="cd-horizontal-timeline">
                                                        <div className="timeline">
                                                            <div className="events-wrapper">
                                                                <div className="events">
                                                                    <ol>
                                                                        <li><a href="#0" data-date="16/01/2015" className="selected">16 Jan</a></li>
                                                                        <li><a href="#0" data-date="28/02/2015">28 Feb</a></li>
                                                                        <li><a href="#0" data-date="20/04/2015">20 Mar</a></li>
                                                                        <li><a href="#0" data-date="20/05/2015">20 May</a></li>
                                                                        <li><a href="#0" data-date="09/07/2015">09 Jul</a></li>
                                                                        <li><a href="#0" data-date="30/08/2015">30 Aug</a></li>
                                                                        <li><a href="#0" data-date="15/09/2015">15 Sep</a></li>
                                                                    </ol>
                                                                    <span className="filling-line" aria-hidden="true" />
                                                                </div>
                                                                {/* .events */}
                                                            </div>
                                                            {/* .events-wrapper */}
                                                            <ul className="cd-timeline-navigation">
                                                                <li><a href="#0" className="prev inactive">Prev</a></li>
                                                                <li><a href="#0" className="next">Next</a></li>
                                                            </ul>
                                                            {/* .cd-timeline-navigation */}
                                                        </div>
                                                        {/* .timeline */}
                                                        <div className="events-content">
                                                            <ol>
                                                                <li className="selected" data-date="16/01/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-5.png" alt="Generic placeholder imag8" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                                <li data-date="28/02/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-6.png" alt="Generic placeholder image9" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                                <li data-date="20/04/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-7.png" alt="Generic placeholder image10" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                                <li data-date="20/05/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-8.png" alt="Generic placeholder image11" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                                <li data-date="09/07/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-9.png" alt="Generic placeholder image12" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                                <li data-date="30/08/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-6.png" alt="Generic placeholder image1314" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                                <li data-date="15/09/2015">
                                                                    <blockquote className="blockquote border-0">
                                                                        <div className="media">
                                                                            <div className="media-left">
                                                                                <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-7.png" alt="Generic placeholder image14" />
                                                                            </div>
                                                                            <div className="media-body">
                                                                                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                </div>
                                                                        </div>
                                                                        <footer className="blockquote-footer text-right">Steve Jobs
                                <cite title="Source Title">Entrepreneur</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                    <p className="lead mt-2">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                        aspernatur at.
                            </p>
                                                                </li>
                                                            </ol>
                                                        </div>
                                                        {/* .events-content */}
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Basic Card</h4>
                                        </div>
                                        <div className="card-content">
                                            <img className="img-fluid" src="images/carousel/06.jpg" alt="234" />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
                                                <a href="/" className="card-link">Card link</a>
                                                <a href="/" className="card-link">Another link</a>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                            <span className="float-left">3 hours ago</span>
                                            <span className="float-right">
                                                <a href="/" className="card-link">Read More <i className="fa fa-angle-right" /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Basic Horizontal Timeline */}
                        </div>
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////*/}
                <footer className="footer footer-static footer-light navbar-border">
                </footer>
            </Fragment>

        )
    }
}