import os
import csv

DATA_DIR = 'data/datos_horarios_csv'
OUTPUT_DIR = 'output'
ESTACIONES_FILE = 'data/estaciones.csv'

estaciones = {}

with open(ESTACIONES_FILE) as f:
    count = 1
    for line in f:
        if count != 1:
            sline = line.split(';')
            estaciones[sline[0].replace(' ', '_')] = {'localidad': sline[3], 'direccion': sline[4],'lat': sline[7], 'long': sline[8]}
        count += 1

measurements = {}
different_measurements = set()
date_set = set()

for file_name in os.listdir(DATA_DIR):
    with open('%s/%s' % (DATA_DIR, file_name)) as csvfile:
        count = 1
        measured_items = []
        measurements[file_name.replace('.utf8.csv', '')] = {}
        for line in csvfile:
            if count != 1:
                sline = line.split(";")
                date = sline[0]
                hour = sline[1]
                datetime = '%s-%s-%s %s' % (date.split('/')[2], date.split('/')[1], date.split('/')[0], hour)
                date_dict = {}
                item_count = 0
                for item in sline[2:]:
                    date_dict[measured_items[item_count]] = item.replace('\n', '')
                    item_count += 1
                measurements[file_name.replace('.utf8.csv', '')][datetime] = date_dict
                date_set.add(datetime)
            else:
                sline = line.split(";")
                for item in sline[2:]:
                    measured_items.append(item)
                    different_measurements.add(item)
                count += 1

#print (measurements)

for measurement in different_measurements:
    with open('%s/%s.csv' % (OUTPUT_DIR, measurement.split(' ')[0]), 'w') as output_file:

        header = 'Fecha;Nombre Estacion;Localidad;Direccion Estacion;lat;long;Valor\n'
        output_file.write(header)

        for date in date_set:
            for key in measurements:
                line = date
                if key in estaciones:
                    line += ';%s;%s;%s;%s;%s' % (key, estaciones[key]['localidad'], estaciones[key]['direccion'], estaciones[key]['lat'], estaciones[key]['long'].replace('\n', ''))
                else:
                    print('Falta %s' % key)
                if date in measurements[key]:
                    if measurement in measurements[key][date]:
                        line += ';%s' % measurements[key][date][measurement]
                    else:
                        line += ';-'
                line += '\n'
                #print (line)
                output_file.write(line)
        # header = 'datetime'
        # for key in measurements:
        #     header += ';%s' % key
        # header += '\n'
        # output_file.write(header)

        # for date in date_set:
        #     line = date
        #     for key in measurements:
        #         if date in measurements[key]:
        #             if measurement in measurements[key][date]:
        #                 line += ';%s' % measurements[key][date][measurement]
        #             else:
        #                 line += ';-'
        #         else:
        #             line += ';-'
        #     line += '\n'
        #     output_file.write(line)