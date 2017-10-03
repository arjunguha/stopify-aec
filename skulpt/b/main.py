#!/usr/bin/env python
# -*- coding: utf-8 -*-
table = [list(range(1000)) for i in range(1000)]

class a(object):
  def main(self, table):
    _buffer = []

    def _buffer_write(str):
        _buffer.append(str)

    _buffer_write('<table xmlns:py="http://spitfire/">')
    _buffer_write('\n')
    for row in table:
      _buffer_write('<tr>')
      _buffer_write('\n')
      for column in row:
        _buffer_write('<td>')
        _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
        _buffer_write('</td>')
        _buffer_write('\n')
      _buffer_write('</tr>')
      _buffer_write('\n')
    _buffer_write('</table>')
    _buffer_write('\n')
    return ''.join(_buffer)

# AG: Added as a sanity check
r = a().main(table)
if 12901045 != len(r):
  raise Exception('Bad result')
