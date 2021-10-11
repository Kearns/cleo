use rocket_dyn_templates::Template;
use std::collections::HashMap;

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> Template {
    let context: HashMap<&str, &str> = HashMap::new();
    Template::render("index", &context)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index]).attach(Template::fairing())
}
