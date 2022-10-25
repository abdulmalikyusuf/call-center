import React from 'react'

function Home() {
  return (
    <>
	{/* // <!-- search modal --> */}
	{/* <div className="modal fade modal-search" tabIndex={-1} role="dialog" aria-labelledby="search_modal" id="search_modal" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<div className="widget widget_search">
					<form method="get" className="searchform search-form" action="/">
						<div className="form-group">
							<input type="text" value="" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input"/>
						</div>
						<button type="submit" className="btn">Search</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	// Team Contact Modal
	<div className="modal fade" id="teamForm" tabIndex={-1} role="dialog" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-body ls">
					<h4 className="team-name mb-35">Contact Reginald S. Butler</h4>
					<form className="contact-form c-mb-10 c-gutter-10" method="post" action="/">
						<div className="row">
							<div className="col-12">
								<div className="form-group has-placeholder">
									<label htmlFor="nameTeam">Full Name <span className="required">*</span></label>
									<input type="text" aria-required="true" value="" name="name" id="nameTeam" className="form-control" placeholder="Name"/>
								</div>
							</div>
							<div className="col-12">
								<div className="form-group has-placeholder">
									<label htmlFor="emailTeam">Email address<span className="required">*</span></label>
									<input type="email" aria-required="true" value="" name="email" id="emailTeam" className="form-control" placeholder="Email"/>
								</div>
							</div>
							<div className="col-12">
								<div className="form-group has-placeholder">
									<label htmlFor="messageTeam">Message</label>
									<textarea aria-required="true" rows={4} cols={45} name="message" id="messageTeam" className="form-control textarea" placeholder="Write a message"></textarea>
								</div>
							</div>
						</div>
						<div className="row mt-20 mt-xl-50">
							<div className="col-12">
								<div className="form-group ">
									<button type="submit" name="contact_submit" className="btn btn-gradient"><span>Send</span></button>
								</div>
							</div>

						</div>
					</form>
				</div>
			</div>
		</div>
	</div> */}

	

	{/* <!-- wrappers for visual page editor and boxed version of template --> */}
	<div id="canvas">
		<div id="box_wrapper">
			{/* <!-- template sections --> */}

			<div className="header_absolute ds s-overlay">

				{/* <!-- header with three Bootstrap columns - with logo, navigation and includes --> */}
				<div className="page_header_wrapper ds affix-wrapper h-[105px]">
                    <header className="grid grid-cols-12 page_header sf-arrows ds justify-nav-center line-header affix">
                        <div className="col-span-11 md:col-span-4 xl:col-span-2 my-15 my-md-0 col-xl-2 col-md-4 col-11">
                            <a href="./" className="logo">
                                <img src="images/logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="xl:col-span-8 col-1 order-3 order-lg-2">
                            <div className="nav-wrap">
                                {/* <!-- main nav start --> */}
                                <nav className="flex">
                                    <ul className="nav sf-menu sf-js-enabled sf-arrows" style={{touchAction: "pan-y"}}>
                                        <li className="active">
                                            <a href="index.html" className="sf-with-ul">Home</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul className="hidden mt-5">
                                                <li className="active">
                                                    <a href="index.html">MultiPage</a>
                                                </li>

                                                <li>
                                                    <a href="index_static.html">Static Intro</a>
                                                </li>
                                                <li>
                                                    <a href="index_singlepage.html">Single Page</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="home-blocks.html">Homeblocks</a>
                                        </li>

                                        <li>
                                            <a href="services.html" className="sf-with-ul">Services</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul className="hidden mt-5">
                                                <li>
                                                    <a href="services.html">Services 1</a>
                                                </li>
                                                <li>
                                                    <a href="services2.html">Services 2</a>
                                                </li>
                                                <li>
                                                    <a href="services3.html">Services 3</a>
                                                </li>
                                                <li>
                                                    <a href="service-single.html">Single Service</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!-- eof service --> */}

                                        <li>
                                            <a href="about.html" className="sf-with-ul">Pages</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul className="hidden mt-5">

                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="team.html" className="sf-with-ul">Team</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="team.html">Team List</a>
                                                        </li>
                                                        <li>
                                                            <a href="team-single.html">Team Member</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="careers.html">Careers</a>
                                                </li>

                                                <li>
                                                    <a href="pricing.html">Pricing</a>
                                                </li>

                                                {/* <!-- shop --> */}
                                                <li>
                                                    <a href="shop-right.html" className="sf-with-ul">Shop</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="shop-account-dashboard.html" className="sf-with-ul">Account</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul className="hidden mt-5">

                                                                <li>
                                                                    <a href="shop-account-details.html">Account details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-addresses.html">Addresses</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-address-edit.html">Edit Address</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-orders.html">Orders</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-order-single.html">Single Order</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-downloads.html">Downloads</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-password-reset.html">Password Reset</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-account-login.html">Login/Logout</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-product-right.html">Product Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-product-left.html">Product Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html">Cart</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-checkout.html">Checkout</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-order-received.html">Order Received</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                {/* <!-- eof shop --> */}

                                                {/* <!-- features --> */}
                                                <li>
                                                    <a href="shortcodes_iconbox.html" className="sf-with-ul">Shortcodes</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="shortcodes_typography.html">Typography</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_buttons.html">Buttons</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_iconbox.html">Icon Boxes</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_progress.html">Progress</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_tabs.html">Tabs &amp; Collapse</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_bootstrap.html">Bootstrap Elements</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_animation.html">Animation</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_icons.html">Template Icons</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_socialicons.html">Social Icons</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <!-- eof shortcodes --> */}

                                                <li>
                                                    <a href="shortcodes_widgets_in_columns.html" className="sf-with-ul">Widgets</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="shortcodes_widgets_in_columns.html">All Widgets</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_widgets_default.html">Default Widgets</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_widgets_shop.html">Shop Widgets</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_widgets_custom.html">Custom Widgets</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="faq.html" className="sf-with-ul">FAQ</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="faq.html">FAQ</a>
                                                        </li>
                                                        <li>
                                                            <a href="faq2.html">FAQ 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <!-- eof faq --> */}

                                                {/* <!-- gallery --> */}
                                                <li>
                                                    <a href="gallery-regular.html" className="sf-with-ul">Gallery</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        {/* <!-- Gallery image only --> */}
                                                        <li>
                                                            <a href="gallery-regular.html" className="sf-with-ul">Gallery Regular</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul className="hidden mt-5">
                                                                <li>
                                                                    <a href="gallery-regular-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-regular.html">3 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-regular-4-cols-fullwidth.html">4 columns</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="gallery-regular-2.html">Gallery Regular 2</a>
                                                        </li>
                                                        {/* <!-- eof Gallery image only --> */}

                                                        {/* <!-- Gallery with title --> */}
                                                        <li>
                                                            <a href="gallery-title.html" className="sf-with-ul">Gallery Title</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul className="hidden mt-5">
                                                                <li>
                                                                    <a href="gallery-title-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-title.html">3 column</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-title-4-cols-fullwidth.html">4 columns</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery with title --> */}

                                                        {/* <!-- Gallery with excerpt --> */}
                                                        <li>
                                                            <a href="gallery-excerpt.html" className="sf-with-ul">Gallery Excerpt</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul className="hidden mt-5">
                                                                <li>
                                                                    <a href="gallery-excerpt-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-excerpt.html">3 column</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-excerpt-4-cols-fullwidth.html">4 columns</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery with excerpt --> */}


                                                        <li>
                                                            <a href="gallery-tiled.html">Tiled Gallery</a>
                                                        </li>
                                                        {/* <!-- Gallery item --> */}

                                                        <li>
                                                            <a href="gallery-single.html" className="sf-with-ul">Gallery Single</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul className="hidden mt-5">
                                                                <li>
                                                                    <a href="gallery-single.html">Gallery Single</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-single2.html">Gallery Single 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery item --> */}
                                                    </ul>
                                                </li>
                                                {/* <!-- eof gallery --> */}


                                                {/* <!-- events --> */}
                                                <li>
                                                    <a href="events-left.html" className="sf-with-ul">Events</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="events-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="events-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="events-full.html">Full Width</a>
                                                        </li>
                                                        <li>
                                                            <a href="event-single-left.html" className="sf-with-ul">Single Event</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul className="hidden mt-5">
                                                                <li>
                                                                    <a href="event-single-left.html">Left Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="event-single-right.html">Right Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="event-single-full.html">Full Width</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <!-- eof events --> */}

                                                <li>
                                                    <a href="comingsoon.html">Comingsoon</a>
                                                </li>

                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>

                                            </ul>
                                        </li>
                                        {/* <!-- eof pages --> */}

                                        {/* <!-- blog --> */}
                                        <li>
                                            <a href="blog-right.html" className="sf-with-ul">News</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul className="hidden mt-5">

                                                <li>
                                                    <a href="blog-right.html">Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-left.html">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-full.html">No Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid.html">Blog Grid</a>
                                                </li>

                                                <li>
                                                    <a href="blog-single-right.html" className="sf-with-ul">Post</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="blog-single-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-full.html">No Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="blog-single-video-right.html" className="sf-with-ul">Video Post</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul className="hidden mt-5">
                                                        <li>
                                                            <a href="blog-single-video-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-video-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-video-full.html">No Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </li>
                                        {/* <!-- eof blog --> */}

                                        {/* <!-- contacts --> */}
                                        <li>
                                            <a href="contact.html" className="sf-with-ul">Contacts</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul className="hidden mt-5">
                                                <li>
                                                    <a href="contact.html">Contact 1</a>
                                                </li>
                                                <li>
                                                    <a href="contact2.html">Contact 2</a>
                                                </li>
                                                <li>
                                                    <a href="contact3.html">Contact 3</a>
                                                </li>
                                                <li>
                                                    <a href="contact4.html">Contact 4</a>
                                                </li>
                                                <li>
                                                    <a href="contact5.html">Contact 5</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!-- eof contacts --> */}

                                        <li>
                                            <a href="#" className="sf-with-ul">Features</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <div className="mega-menu hidden mt-5 left-918.984px">
                                                <ul className="mega-menu-row">
                                                    <li className="mega-menu-col">
                                                        <a href="#">Headers</a>
                                                        <ul>
                                                            <li>
                                                                <a href="header1.html">Header Type 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="header2.html">Header Type 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="header3.html">Header Type 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="header4.html">Header Type 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="header5.html">Header Type 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="header6.html">Header Type 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="#">Side Menus</a>
                                                        <ul>
                                                            <li>
                                                                <a href="header-side.html">Push Left</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-right.html">Push Right</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-slide.html">Slide Left</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-slide-right.html">Slide Right</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-sticked.html">Sticked Left</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-sticked-right.html">Sticked Right</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="title1.html">Title Sections</a>
                                                        <ul>
                                                            <li>
                                                                <a href="title1.html">Title section 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="title2.html">Title section 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="title3.html">Title section 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="title4.html">Title section 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="title5.html">Title section 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="title6.html">Title section 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="footer1.html#footer">Footers</a>
                                                        <ul>
                                                            <li>
                                                                <a href="footer1.html#footer">Footer Type 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer2.html#footer">Footer Type 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer3.html#footer">Footer Type 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer4.html#footer">Footer Type 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer5.html#footer">Footer Type 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer6.html#footer">Footer Type 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="copyright1.html#copyright">Copyright</a>

                                                        <ul>
                                                            <li>
                                                                <a href="copyright1.html#copyright">Copyright 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright2.html#copyright">Copyright 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright3.html#copyright">Copyright 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright4.html#copyright">Copyright 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright5.html#copyright">Copyright 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright6.html#copyright">Copyright 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                    </ul>


                                </nav>
                                {/* <!-- eof main nav --> */}
                            </div>
                        </div>
                        <div className="xl:col-span-2 col-sapien    -6 order-2 order-lg-3 text-right d-none d-md-block">
                            <a href="contact.html" className="btn btn-outline-gradient">
                                <span><i className="color-darkgrey ico ico-comment" aria-hidden="true"></i> Request a quote</span>
                            </a>
                        </div>
					    {/* <!-- header toggler --> */}
					    <span className="toggle_menu"><span></span></span>
				    </header>
                </div>

			</div>

			<section className="page_slider ds">
				<div className="flexslider" data-nav="false" data-speed="5000">
					<ul className="slides">
						<li className="cover-image" style={{backgroundImage: 'url(&quot;images/slide01.jpg&quot;)', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 0, display: 'block', zIndex: 1}} data-thumb-alt="">
							<span className="flexslider-overlay"></span>
							<img src="images/slide01.jpg" alt="" draggable="false"/>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="intro_layers_wrapper">
											<div className="intro_layers">
												<div className="intro_layer" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<div className="d-inline-block">
														<h3>
															Convert Leads With <br/> Integrated Call Center
														</h3>
													</div>
												</div>
												<div className="intro_layer" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<div className="d-inline-block">
														<p>
															Our Mexican debt collectors helped us handle three-times<br/>w the amount of placements.
														</p>
													</div>
												</div>
												<div className="intro_layer intro_buttons" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<a href="contact.html" className="btn btn-big  btn-gradient"><span>Request Pricing</span></a>
												</div>

												<div className="intro_layer intro_video d-none d-md-block" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<a href="#" className="photoswipe-link video-link2" data-iframe="https://www.youtube.com/embed/WwvNiN2_Jlk" data-index="1">
														<i className="fa fa-play"></i>
													</a>
												</div>
											</div> 
										</div> 
									</div> 
								</div>
							</div>
						</li>
						<li className="cover-image" style={{backgroundImage: 'url(&quot;images/slide01.jpg&quot;)', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 0, display: 'block', zIndex: 1}}  data-thumb-alt="">
							<span className="flexslider-overlay"></span>
							<img src="images/slide02.jpg" alt="" draggable="false"/>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="intro_layers_wrapper">
											<div className="intro_layers">
												<div className="intro_layer" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<div className="d-inline-block">
														<h3>
															Convert Leads With <br/> Integrated Call Center
														</h3>
													</div>
												</div>
												<div className="intro_layer" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<div className="d-inline-block">
														<p>
															Our Mexican debt collectors helped us handle three-times<br/>w the amount of placements.
														</p>
													</div>
												</div>
												<div className="intro_layer intro_buttons" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<a href="contact.html" className="btn btn-big  btn-gradient"><span>Request Pricing</span></a>
												</div>

												<div className="intro_layer intro_video d-none d-md-block" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<a href="#" className="photoswipe-link video-link2" data-iframe="https://www.youtube.com/embed/WwvNiN2_Jlk" data-index="1">
														<i className="fa fa-play"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							
                            </div>
						</li>
						<li className="cover-image flex-active-slide" style={{backgroundImage: 'url(&quot;images/slide01.jpg&quot;)', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 0, display: 'block', zIndex: 1}}  data-thumb-alt="">
							<span className="flexslider-overlay"></span>
							<img src="images/slide03.jpg" alt="" draggable="false"/>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="intro_layers_wrapper">
											<div className="intro_layers">
												<div className="intro_layer animated fadeInDown" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<div className="d-inline-block">
														<h3>
															Convert Leads With <br/> Integrated Call Center
														</h3>
													</div>
												</div>
												<div className="intro_layer animated fadeInDown" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<div className="d-inline-block">
														<p>
															Our Mexican debt collectors helped us handle three-times<br/>w the amount of placements.
														</p>
													</div>
												</div>
												<div className="intro_layer intro_buttons animated fadeInDown" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<a href="contact.html" className="btn btn-big  btn-gradient"><span>Request Pricing</span></a>
												</div>

												<div className="intro_layer intro_video d-none d-md-block animated fadeInDown" data-animation="fadeInDown" style={{visibility: 'hidden'}}>
													<a href="#" className="photoswipe-link video-link2" data-iframe="https://www.youtube.com/embed/WwvNiN2_Jlk" data-index="1">
														<i className="fa fa-play"></i>
													</a>
												</div>
											</div> 
										</div> 
									</div> 
								</div>
							</div>
						</li>
					</ul>
				<ol className="flex-control-nav flex-control-paging"><li><a href="#" className="">1</a></li><li><a href="#" className="">2</a></li><li><a href="#" className="flex-active">3</a></li></ol></div>
                 {/* <!-- eof flexslider --> */}
			</section>

			{/* <!-- Section Call To Action --> */}
			<section className="ds bg-transparent mt-n-30 mt-n-xl-100">
				<div className="container">
					<div className="row">
						<div className="col-12 z-3">
							<div className="call-to-action gradient-background background-pattern2">
								<div className="left-part text-center text-md-left">
									<h4 className="special-heading">
										Ensure Your Business
									</h4>
									<div className="divider-10"></div>
									<h4 className="special-heading">
										Continuity &amp; Service Levels
									</h4>
								</div>
								<div className="right-part">
									<a href="services.html" className="btn btn-big with-arrow btn-outline-darkgrey">
										<span>Discover More</span>
										<i className="ico ico-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Section About --> */}
			<section id="about" className="ls s-py-60 s-pt-md-20 s-py-lg-100 s-py-xl-120 c-gutter-20">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-md-5 order-2 order-lg-1">
							<div className="divider-40 divider-md-35"></div>
							<p className="special-heading subheading">
								About Call Center
							</p>
							<h4 className="special-heading">
								World-Class<br/>
								Contact Center
							</h4>
							<div className="divider-30"></div>
							<p>
								Our agents are fully bilingual, bi-cultural, well educated and have expertise in a wide array of
								business functions such as Debt Collection, Customer Service.
							</p>
							<div className="divider--10 divider-md-30"></div>
							<p className="progress-title text-uppercase">Customer Service</p>
							<div className="progress">
								<div className="progress-bar bg-maincolor w-[55%]" role="progressbar">
									<span>55%</span>
								</div>
							</div>
							<p className="progress-title text-uppercase">Sales / Lead Generation</p>
							<div className="progress">
								<div className="progress-bar bg-maincolor2 w-[32%]" role="progressbar">
									<span>32%</span>
								</div>
							</div>
							<div className="divider-40 divider-lg-50"></div>
							<a href="about.html" className="btn btn-big with-arrow btn-gradient">
								<span>Learn More</span>
								<i className="ico ico-arrow-right"></i>
							</a>
						</div>

						<div className="col-12 col-md-6 ml-auto order-1 order-lg-2">
							{/* <!-- .col --> */}
							<div className="images-wrap-item img-right">
								<img src="images/img_02.jpg" alt=""/>
								<div className="pattern-square right-pattern">
									<img className="image-back" src="images/img_01.jpg" alt=""/>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* <!-- Section Steps --> */}
			<section id="steps" className="ls ms s-pt-55 s-pb-60 s-pb-md-50 s-pt-lg-95 s-pb-lg-90 s-pt-xl-115 s-pb-xl-110">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12">
							<p className="special-heading subheading">
								Four easy steps
							</p>
							<h4 className="special-heading">
								How To Get <br/>Started
							</h4>
							<div className="divider-33"></div>

							<div className="steps">

								<div className="step">
									<div className="step-top">
										<div className="step-title mb-md-20">
											<h6>Setup Your<br/> Campaign</h6>
										</div>
										<span className="step-bullet"></span>
									</div>
									<div className="step-content mt-10 mt-lg-20">
										<p>Name your Campaign and choose your country</p>
									</div>
								</div>
								<div className="step">
									<div className="step-top">
										<div className="step-title mb-md-20">
											<h6>Get a Tracking<br/> Number</h6>
										</div>
										<span className="step-bullet"></span>
									</div>
									<div className="step-content mt-10 mt-lg-20">
										<p>Get a unique Tracking Number where you can send calls</p>
									</div>
								</div>
								<div className="step">
									<div className="step-top">
										<div className="step-title mb-md-20">
											<h6>Add a Target<br/> Line</h6>
										</div>
										<span className="step-bullet"></span>
									</div>
									<div className="step-content mt-10 mt-lg-20">
										<p>Forward your calls to buyers or anywhere you'd like them to go</p>
									</div>
								</div>
								<div className="step">
									<div className="step-top">
										<div className="step-title mb-md-20">
											<h6>Launch Your<br/> Campaign</h6>
										</div>
										<span className="step-bullet"></span>
									</div>
									<div className="step-content mt-10 mt-lg-20">
										<p>Test your Tracking Number to see operate in the real-time</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Section Services --> */}
			<section id="services" className="ls s-pt-55 s-pb-60 s-py-lg-100 s-py-xl-120">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-lg-4">
							<p className="special-heading subheading">
								Our Expertise
							</p>
							<h4 className="special-heading">
								Some Of The<br/> Services We Offer
							</h4>
							<div className="divider-20 divider-md-30"></div>
							<p>
								Call Center Services International's management team has over 35-years of expertise in successfully
								establishing U.S.
							</p>
							<div className="divider-md-40"></div>
							<a href="services.html" className="btn btn-big with-arrow btn-gradient">
								<span>View More</span>
								<i className="ico ico-arrow-right"></i>
							</a>
							<div className="divider-md-30 divider-lg-0"></div>
						</div>
						<div className="col-12 col-lg-8 animate animated fadeInRight" data-animation="fadeInRight">
							<div className="row">
								<div className="col-12 col-md-6">
									<div className="divider-50"></div>
									<div className="icon-box service-box gradient-hover box-shadow">
										<div className="icon-styled color-main fs-50">
											<i className="ico-phone-call"></i>
										</div>
										<h5 className="service-title">
											<a href="service-single.html">Debt Collection</a>
										</h5>
										<p>
											We will allow you to establish a world-class Debt Collection
										</p>
									</div>
									<div className="divider-30"></div>
									<div className="icon-box service-box gradient-hover box-shadow">
										<div className="icon-styled color-main fs-50">
											<i className="ico-chat"></i>
										</div>
										<h5 className="service-title">
											<a href="service-single.html">Lead Generation</a>
										</h5>
										<p>
											Improve direct response time, increase lead generation
										</p>
									</div>
									<div className="divider-30 divider-md-0"></div>
								</div>
								<div className="col-12 col-md-6">
									<div className="icon-box service-box gradient-hover box-shadow">
										<div className="icon-styled color-main fs-50">
											<i className="ico-phone"></i>
										</div>
										<h5 className="service-title">
											<a href="service-single.html">Customer Service</a>
										</h5>
										<p>
											Center with bicultural &amp; bilingual agents
										</p>
									</div>
									<div className="divider-30"></div>
									<div className="icon-box service-box gradient-hover box-shadow">
										<div className="icon-styled color-main fs-50">
											<i className="ico-chat-alt"></i>
										</div>
										<h5 className="service-title">
											<a href="service-single.html">IT Development</a>
										</h5>
										<p>
											We provides nearshore IT staff in Mexico
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Section  Testimonials --> */}
			<section id="testimonials" className="ds gradient-background s-pt-55 s-pb-55 s-pt-lg-95 s-pb-lg-100 s-pt-xl-115 s-pb-xl-120 with-particles">
				<div id="particles-js" className="particles-js">
                    <canvas className="particles-js-canvas-el w-full h-full" width="1501" height="751">
                    </canvas>
                </div>
				<div className="container">
					<div className="row">

						<div className="col-12 text-center">
							<p className="special-heading subheading">
								Testimonials
							</p>
							<h4 className="special-heading">
								What People Say About Our <br/>Services
							</h4>
							<div className="divider-30 divider-lg-40"></div>
						</div>

						<div className="col-md-12">
							<div className="testimonials-slider owl-carousel owl-loaded owl-drag owl-theme" data-autoplay="false" data-loop="false" data-responsive-lg="3" data-responsive-md="2" data-responsive-sm="2" data-nav="false" data-dots="true" data-width="true">
								
							<div className="owl-stage-outer">
                                <div className="owl-stage" style={{transform: 'translate3d(-900px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2100px'}}><div className="owl-item" style={{width: 'auto', marginRight: '30px'}}>
                                    <div className="quote-item quote-large ls" data-index="0">
									<img src="images/team/testimonials01.jpg" alt=""/>
									<div className="quote-content">
										<p>The best way to give your testimonial a boost is by adding a compelling summary
											sub-headlineL</p>
										<h5 className="author-name mt-35">Helen E. Henderson</h5>
										<p className="author-position">Customer</p>
									</div>
								</div>
                            </div>
                            <div className="owl-item" style={{width: 'auto', marginRight: '30px'}}>
                                    <div className="quote-item ls" data-index="1">
									<div className="quote-content">
										<p>I just wanted to share a quick note and let you know that you guys do a really good job.</p>
										<div className="quote-author">
											<img src="images/author01.jpg" alt=""/>
											<div className="author-meta">
												<h6 className="author-name">Zola M. Powell</h6>
												<p className="author-position">Customer</p>
											</div>
										</div>
									</div>
								</div></div><div className="owl-item active w-auto mr-[30px]">
                                    <div className="quote-item ls" data-index="2">
                                        <div className="quote-content">
                                            <p>You made it so simple. My new site is so much faster and easier to work with than my old </p>
                                            <div className="quote-author">
                                                <img src="images/author04.jpg" alt=""/>
                                                <div className="author-meta">
                                                    <h6 className="author-name">Albert M. Doyle</h6>
                                                    <p className="author-position">Customer</p>
                                                </div>
                                            </div>
                                        </div>
								</div></div><div className="owl-item active w-auto mr-[30px]">
                                    <div className="quote-item quote-large ls" data-index="3">
									<img src="images/team/testimonials02.jpg" alt=""/>
									<div className="quote-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas vitae sagittis sapien. </p>
										<h5 className="author-name mt-35">Robert C. Wilson</h5>
										<p className="author-position">Customer</p>
									</div>
								</div></div><div className="owl-item active w-auto mr-[30px]">
                                    <div className="quote-item ls" data-index="4">
									<div className="quote-content">
										<p>Morbi et risus tortor. Suspendisse eu varius sem cras consequat commodo.</p>
										<div className="quote-author">
											<img src="images/author03.jpg" alt=""/>
											<div className="author-meta">
												<h6 className="author-name">Zola M. Powell</h6>
												<p className="author-position">Customer</p>
											</div>
										</div>
									</div>
								</div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"><i className="ico ico-arrow-left"></i></div><div className="owl-next"><i className="ico ico-arrow-right-alt"></i></div></div><div className="owl-dots"><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot active"><span></span></div></div></div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Section  Team --> */}
			<section id="team" className="ls s-pt-55 s-pb-10 s-pt-lg-100 s-pb-lg-65 s-pt-xl-115 s-pb-xl-75">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<p className="special-heading subheading">
								Our team
							</p>
							<h4 className="special-heading">
								Our Best Spicialists <br/>Work For You
							</h4>
							<div className="divider-30 divider-lg-40"></div>
							<div className="owl-carousel owl-shadow-items owl-loaded owl-drag owl-theme" data-autoplay="false" data-loop="false" data-responsive-lg="4" data-responsive-md="3" data-responsive-sm="2" data-nav="false" data-dots="false">

								

								
							<div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2400px'}}><div className="owl-item active" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="0">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/01.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Barbra J. Zambrano</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item active" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="1">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/02.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Roger M. Howell</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item active" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="2">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/03.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Joyce V. Garcia</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item active" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="3">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/04.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Jacob B. McGinley</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="4">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/05.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Alice W. Chau</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="5">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/06.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Robert C. Wilson</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="6">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/07.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Timothy D. Hall</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div><div className="owl-item" style={{width: '270px', marginRight: '30px'}}><div className="team-member vertical-item text-center overflow-hidden" data-index="7">
									<div className="item-media">
										<a href="team-single.html">
											<img src="images/team/08.jpg" alt=""/>
										</a>
									</div>
									<div className="item-content">
										<h5 className="team-name">
											<a href="team-single.html">Audrey S. Cook</a>
										</h5>
										<p className="team-position">
											Manager
										</p>
										<span className="social-icons">
											<a href="https://facebook.com/" className="fa fa-facebook" title="facebook"></a>
											<a href="https://telegram.com/" className="fa fa-paper-plane" title="telegram"></a>
											<a href="https://instagram.com/" className="fa fa-instagram" title="instagram"></a>
											<a href="https://youtube.com/" className="fa fa-youtube-play" title="fa-youtube"></a>
										</span>
									</div>
								</div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"><i className="ico ico-arrow-left"></i></div><div className="owl-next"><i className="ico ico-arrow-right-alt"></i></div></div><div className="owl-dots disabled"></div></div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Section Contacts --> */}
			<section id="contacts" className="ls s-py-xl-0 container-px-0 contact-pattern">
			<div className="container-fluid">
					<div className="container position-relative c-gutter-0">
						<div className="col-12 col-lg-5 col-absolute animate animated fadeInRight" data-animation="fadeInRight">
							<div className="pattern-gradient ls box-shadow p-15 p-lg-60 p-xl-100">
								<h4 className="mt-n-5">
									Contact Us
								</h4>
								<div className="divider-20 divider-lg-40"></div>
								<form className="contact-form c-mb-15 c-gutter-15 floating-label" method="post" action="/">
									<div className="row">
										<div className="col-12">
											<div className="form-group">
												<label htmlFor="name"><span>Name</span><span className="required">*</span></label>
												<input type="text" aria-required="true" value="" name="name" id="name" className="form-control"/>
											</div>
											<div className="form-group">
												<label htmlFor="email"><span>Email</span><span className="required">*</span></label>
												<input type="email" aria-required="true" value="" name="email" id="email" className="form-control"/>
											</div>
											<div className="form-group">
												<label htmlFor="message"><span>Message</span></label>
												<textarea aria-required="true" rows={3} cols={45} name="message" id="message" className="form-control"></textarea>
											</div>
											<div className="form-group">
												<button type="submit" id="contact_form_submit" name="contact_submit" className="btn btn-big btn-gradient mt-20 mt-lg-40">
													<span>Submit</span>
												</button>
											</div>
										</div>
									</div>
								</form>

							</div>
						</div>
					</div>
					
				</div>
			</section>


			<footer className="page_footer page_footer s-borderbottom-container ds s-pt-60 s-pb-15 s-pt-lg-90 s-pb-lg-50 s-pt-xl-110 s-pb-xl-70 c-gutter-50">
				<div className="container">
					<div className="row">

						<div className="col-md-6 col-lg-3 animate mr-auto animated fadeInUp" data-animation="fadeInUp">

							<div className="widget widget_text mt-lg-10">
								<a href="./" className="logo">
									<img src="images/logo-grey.png" alt=""/>
								</a>
							</div>
						</div>

						<div className="col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_nav_menu">
								<ul className="menu">
									<li>
										<a href="team.html">Management</a>
									</li>
									<li>
										<a href="contact.html">Contact</a>
									</li>
									<li>
										<a href="blog-right.html">News</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_contact_list">
								<div className="contact-item">
									<p className="title">Give Us A Call</p>
									<a className="content" href="tel:1-800-765-4321">1-800-765-4321</a>
								</div>
								<div className="contact-item">
									<p className="title">Email Us</p>
									<a className="content" href="mailto:info@iqcall.com">info@iqcall.com</a>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_social_buttons">
								<div className="widget-title">
									Join Us
								</div>
								<a href="#" className="fa fa-paper-plane border-icon rounded-icon" title="telegram"></a>
								<a href="#" className="ml-0 fa fa-facebook border-icon rounded-icon" title="facebook"></a>
								<a href="#" className="fa fa-instagram border-icon rounded-icon" title="instagram"></a>
								<a href="#" className="fa fa-youtube-play border-icon rounded-icon" title="youtube-play"></a>
								<a href="#" className="fa fa-twitter border-icon rounded-icon" title="twitter"></a>
							</div>
						</div>

					</div>
				</div>
			</footer>

			<section className="page_copyright ds s-py-20">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center animate" data-animation="fadeInUp">
							<p>© <span className="copyright_year">2020</span> Copyright</p>
						</div>
					</div>
				</div>
			</section>


		</div>
	</div>
    </>
  )
}

export default Home