DATA_DIR = ${PWD}/data

download-osm-data:
	docker run -it --rm -u $(id -u ${USER}):$(id -g ${USER}) \
		-v ${DATA_DIR}/downloads:/downloads" \
		openmaptiles/openmaptiles-tools \
		download-osm planet -- -d /downloads

import-osm-data:
	docker run \
    -v ${DATA_DIR}/downloads/planet-220808.osm.pbf:/data/region.osm.pbf \
    -v ${DATA_DIR}/database:/data/database/ \
    -v ${DATA_DIR}/tiles:/data/tiles/ \
		-e THREAD=10 \
		--privileged \
    overv/openstreetmap-tile-server \
    import

run-tileserver:
	docker run \
    -v ${DATA_DIR}/downloads/planet-220808.osm.pbf:/data/region.osm.pbf \
    -v ${DATA_DIR}/database:/data/database/ \
    -v ${DATA_DIR}/tiles:/data/tiles/ \
		-p 8080:4030 \
		-e ALLOW_CORS=enabled \
    overv/openstreetmap-tile-server \
    run

dev-web:
	npx nx serve web --hostname 0.0.0.0
