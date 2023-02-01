<?php
    class App {
        protected $controller = 'homeController';
        protected $method = 'index';
        protected $params = [];

        public function __construct()
        {
            $this->parseURL();
            if(file_exists(CONTROLLER . $this->controller . '.php')) {
                $this->controller = new $this->controller;
                if(method_exists($this->controller, $this->method)) {
                    call_user_func_array([$this->controller, $this->method], $this->params);
                }
            }
        }
        public function parseURL() {
            $request = trim($_SERVER['REQUEST_URI'], '/');
            if(!empty($request)) {
                $url = explode('/', $request);
                $this->controller = isset($url[0]) ? $url[0] . 'Controller' : 'homeController';
                $this->method = isset($url[1]) ? $url[1] : 'index';
                unset($url[0],$url[1]);
                $this->params = !empty($url) ? array_values($url) : [];
            }
        }
    }