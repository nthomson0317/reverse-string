require 'pry'
def reverse_string(str)
  # type your code in here

  # reversedString = ''
  # string_length = str.length - 1
  # string_length.downto(0).each do |l|
  #   reversedString << str[l]
  # end
  # reversedString

  str = str.split("")
  reversed = []
  str.each {|i| reversed.unshift(i)}
  reversed.join("")







if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution