<template>
    <div>
        <div class="newsProd">
            <main class="container">
                <div class="news row flex-column flex-sm-row container justify-content-between  align-items-center pt-5 pb-5 mx-0">
                    <div class="newsAr">
                        <h2>news arrivals</h2></div>
                    <nav class="newsNav">
                        <a class="newsNavlink" href="#">Home</a> /
                        <a class="newsNavlink" href="#">Men</a> /
                        <a class="newsNavlink newsNavLinkActive" href="#">news arrivals</a>
                    </nav>
                </div>
            </main>
        </div>
        <main class="container mt-5 pt-4">
            <div class="accordion" id="accordionExample">
                <div class="card cardCheckOut">
                    <div class="card-header px-0 d-flex justify-content-center justify-content-lg-start" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                01. Shipping address
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="row mx-0 d-flex flex-column flex-lg-row justify-content-center align-items-start pt-2 pl-4">
                            <div class="col-lg-6 d-flex flex-column">
                                <h3 class="hedThemeText mt-2">Check as a guest or register</h3>
                                <p>Register with us for future convenience</p>
                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                           value="option1" checked>
                                    <label class="form-check-label hedThemeText" for="exampleRadios1">
                                        checkout as guest
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                           value="option2">
                                    <label class="form-check-label hedThemeText" for="exampleRadios2">
                                        register
                                    </label>
                                </div>
                                <h3 class="hedThemeText mt-3">register and save time!</h3>
                                <p>Register with us for future convenience</p>
                                <div class="mt-2 d-flex flex-column"><a href="#">>>Fast and easy checkout</a>
                                    <a href="#">>>Easy access to your order history and status</a></div>
                                <button type="button" class="btn btn-outline-primary checkButton mt-5">Continue</button>
                            </div>
                            <div class="col-lg-6 d-flex flex-column">
                                <h3 class="hedThemeText mt-5 mt-lg-2">Already registed?</h3>
                                <p>Please log in below</p>
                                <form class="mt-1">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="hedThemeText">Email address
                                            <mark>*</mark>
                                        </label>
                                        <input type="email" class="form-control inpCheck" id="exampleInputEmail1"
                                               aria-describedby="emailHelp">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1" class="hedThemeText">Password
                                            <mark>*</mark>
                                        </label>
                                        <input type="password" class="form-control inpCheck" id="exampleInputPassword1">
                                    </div>
                                </form>
                                <span>* Required Fileds</span>
                                <div class="d-flex align-items-center">
                                    <button type="button" class="btn btn-outline-primary checkButton my-4">Log in</button>
                                    <span class="forgotPass mx-3">Forgot Password?</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card cardCheckOut">
                    <div class="card-header px-0 d-flex justify-content-center justify-content-lg-start" id="headingTwo">
                        <h2 class="mb-0 ">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                02. billing formation
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card cardCheckOut">
                    <div class="card-header px-0 d-flex justify-content-center justify-content-lg-start" id="heading3">
                        <h2 class="mb-0 ">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                03. SHIPPING INFORMATION
                            </button>
                        </h2>
                    </div>
                    <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card cardCheckOut">
                    <div class="card-header px-0 d-flex justify-content-center justify-content-lg-start" id="heading4">
                        <h2 class="mb-0 ">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                04. SHIPPING METHOD
                            </button>
                        </h2>
                    </div>
                    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card cardCheckOut">
                    <div class="card-header px-0 d-flex justify-content-center justify-content-lg-start" id="heading5">
                        <h2 class="mb-0 ">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                05. PAYMENT METHOD
                            </button>
                        </h2>
                    </div>
                    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card cardCheckOut">
                    <div class="card-header px-0 d-flex justify-content-center justify-content-lg-start" id="heading6">
                        <h2 class="mb-0 ">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                06. ORDER REVIEW
                            </button>
                        </h2>
                    </div>
                    <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "CheckOut"
    }
</script>

<style>

</style>