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
        _buffer_write('%s' % column)
        _buffer_write('</td>')
        _buffer_write('\n')
      _buffer_write('</tr>')
      _buffer_write('\n')
    _buffer_write('</table>')
    _buffer_write('\n')
    return ''.join(_buffer)


a().main(table)
