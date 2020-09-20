package it.fuesi.test.springboottest.controllers;

import java.util.Arrays;
import java.util.Collection;
import java.util.Properties;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.AbstractEnvironment;
import org.springframework.core.env.EnumerablePropertySource;
import org.springframework.core.env.Environment;
import org.springframework.core.env.MutablePropertySources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import it.fuesi.test.springboottest.model.User;

@RestController
@RequestMapping("/api/system") // FIXME: use constants
public class SystemController {

    @Autowired
    Environment env;

    @RequestMapping(value = "/version", method = RequestMethod.GET)
    public ResponseEntity<String> getVersion() {
        
        return ResponseEntity.ok(env.getProperty("app.version", "0")); //FIXME
    }

    @RequestMapping(value = "/env", method = RequestMethod.GET)
    public ResponseEntity<Properties> getEnvironment() {
        Properties props = new Properties();
        MutablePropertySources propSrcs = ((AbstractEnvironment) env).getPropertySources();
        StreamSupport.stream(propSrcs.spliterator(), false).filter(ps -> ps instanceof EnumerablePropertySource)
                .map(ps -> ((EnumerablePropertySource) ps).getPropertyNames()).flatMap(Arrays::<String>stream)
                .forEach(propName -> props.setProperty(propName, env.getProperty(propName)));

        return ResponseEntity.ok(props);
    }
}