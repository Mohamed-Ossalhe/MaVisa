<?php
    class rdvController extends Controller {
        // get All Data
        public function getAllRdvs() {
            $this->model("RDV");
            $rdvs = $this->model->getAllData();
            echo json_encode($rdvs);
        }
    }
?>