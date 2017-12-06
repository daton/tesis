package org.campos.tesis;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RepositorioClima extends MongoRepository<Clima, Long> {
}
