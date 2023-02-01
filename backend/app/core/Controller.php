<?php
class Controller {
    protected $model;
    public function model($modelName, $data = []) {
        if(file_exists(MODEL . $modelName . '.php')) {
            $this->model = new $modelName;
        }
    }
}