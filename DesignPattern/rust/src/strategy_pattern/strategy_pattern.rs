// =========================== OOP Approach ===========================
// trait RouteStrategy {
//   fn build_route(&self, from: &str, to: &str);
// }

// struct WalkingStrategy;

// impl RouteStrategy for WalkingStrategy {
//   fn build_route(&self, from: &str, to: &str) {
//     println!("Walking route from {from} to {to}: 4 km, 30min");
//   }
// }

// struct PublicTransportStrategy;

// impl RouteStrategy for PublicTransportStrategy {
//   fn build_route(&self, from: &str, to: &str) {
//     println!("public transport route from {from} to {to}: 3km, 5min");
//   }
// }

// struct Navigator<T: RouteStrategy> {
//   route_strategy: T,
// }

// impl<T: RouteStrategy> Navigator<T> {
//   pub fn new(route_strategy: T) -> Self {
//       Self { route_strategy }
//   }

//   pub fn route(&self, from: &str, to: &str) {
//       self.route_strategy.build_route(from, to);
//   }
// }

// =========================== OOP Approach ===========================

// =========================== functional Approach ===========================
type RouteStrategy = fn(from: &str, to: &str);

fn walking_strategy(from: &str, to: &str) {
  println!("Walking route from {from} to {to}: 4 km, 30min");
}

fn public_transport_strategy(from: &str, to: &str) {
  println!("public transport route from {from} to {to}: 3km, 5min");
}

struct Navigator {
  route_strategy: RouteStrategy,
}

impl Navigator {
  pub fn new(route_strategy: RouteStrategy) -> Self {
    Self {
      route_strategy
    }
  }

  pub fn route(&self, from: &str, to: &str) {
    (self.route_strategy)(from, to);
}
}
// =========================== functional Approach ===========================

pub fn test() {
  // let navigator = Navigator::new(WalkingStrategy);
  // navigator.route("Home", "Work");
  // navigator.route("Work", "Home");

  // let navigator = Navigator::new(PublicTransportStrategy);
  // navigator.route("Home", "Work");
  // navigator.route("Work", "Home");

  let navigator = Navigator::new(walking_strategy);
  navigator.route("Home", "Work");
  navigator.route("Home", "Work");

  let navigator = Navigator::new(public_transport_strategy);
  navigator.route("Home", "Club");
  navigator.route("Club", "Work");

  let navigator = Navigator::new(|from, to| {
    println!("Specific route from {} to {}", from, to);
  });
  navigator.route("Home", "Club");
  navigator.route("Club", "Work");
}


