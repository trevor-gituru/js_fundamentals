/*Function can be treated as regular values , same as binding names can be treated
as regular binding names*/
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
