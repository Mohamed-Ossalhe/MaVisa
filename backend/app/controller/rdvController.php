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
        // get rdvs times
        public function getReservedDayTimes() {
            if(checkMethod("POST")) {
                $date = file_get_contents("php://input");
                $data = array(
                    "rdv-date" => $date
                );
                $this->model("RDV");
                $times = $this->model->getTimes($data);
                echo json_encode($times);
            }
        }
    }
?>