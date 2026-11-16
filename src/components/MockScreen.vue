<script setup>
defineProps({ kind: { type: String, required: true } })
</script>

<template>
  <div class="screen">
    <div class="bar">
      <i></i><i></i><i></i>
      <span v-if="kind === 'route'">Transport accompagné · Demande</span>
      <span v-else-if="kind === 'kanban'">360autowrapcrm.netlify.app</span>
      <span v-else>WEKILO · Suivi du colis</span>
    </div>

    <!-- Trajet -->
    <div v-if="kind === 'route'" class="scr">
      <div class="d-flex justify-content-between align-items-center gap-2">
        <b>Rendez-vous médical</b><span class="pill">Bénévole jumelé</span>
      </div>
      <div class="map">
        <svg viewBox="0 0 400 150" preserveAspectRatio="none">
          <path class="route" d="M30 120 C 90 120, 110 50, 170 60 S 260 120, 300 80 S 360 30, 375 30" />
          <circle class="stop" cx="30" cy="120" r="7" />
          <circle class="stop" cx="170" cy="60" r="7" />
          <circle class="stop end" cx="375" cy="30" r="8" />
        </svg>
      </div>
      <div class="d-flex justify-content-between align-items-center gap-2">
        <span class="text-soft">Domicile → Pharmacie → Clinique</span><span class="pill amber">3 arrêts</span>
      </div>
    </div>

    <!-- Kanban -->
    <div v-else-if="kind === 'kanban'" class="scr">
      <div class="kb">
        <div class="col-kb"><h5>À faire</h5>
          <div class="card-kb glow">Pose film teinté<span class="pill amber">Urgent</span></div>
          <div class="card-kb">Covering capot<span class="pill">Covering</span></div>
        </div>
        <div class="col-kb"><h5>En cours</h5>
          <div class="card-kb">Protection PPF<span class="pill">PPF</span></div>
        </div>
        <div class="col-kb"><h5>Terminé</h5>
          <div class="card-kb">Lettrage véhicule<span class="pill">Lettrage</span></div>
        </div>
      </div>
    </div>

    <!-- Suivi -->
    <div v-else class="scr">
      <div class="d-flex justify-content-between align-items-center gap-2">
        <b>Colis 4,5 kg</b><span class="pill">Paiement sécurisé</span>
      </div>
      <div class="track">
        <div class="tk done"><span class="dot"></span><div><b>Remis au voyageur</b><small>Montréal</small></div><small>lun.</small></div>
        <div class="tk now"><span class="dot"></span><div><b>En vol</b><small>Montréal → Douala</small></div><small>mar.</small></div>
        <div class="tk"><span class="dot"></span><div><b>Remis au destinataire</b><small>Douala</small></div><small>mer.</small></div>
      </div>
    </div>
  </div>
</template>
