<?php
    class rdvController extends Controller {
        // get All Data
        public function getAllRdvs() {
            if(checkMethod("GET")) {
                $this->model("RDV");
                $rdvs = $this->model->getAllData();
                echo json_encode($rdvs);
            }
        }
        // get rdvs data where count = 6
        public function getReservedRdvs() {
            if(checkMethod("GET")) {
                $this->model("RDV");
                $rdvs = $this->model->getDataRepeated();
                echo json_encode($rdvs);
            }
        }
    }
?>