doctor_map = "One: William Hartnell
Two: Patrick Troughton
Three: Jon Pertwee
Four: Tom Baker (longest run)
5: Peter Davison
six: Colin Baker
Seven:   Sylvester McCoy
Eight: Paul McGann
Nine: Christopher Eccleston *series reboot*
Ten: David Tennant <- personal fav
Eleven: Matthew Robert Smith - the current doctor "


#string.scan(/([\b\w]+)[:].([0-9])/)

#a= doctor_map.scan(/([\b\w]+)[:].([\w]+\s[\w]+\s*)/)

#a= doctor_map.scan(/([\b\w]+)[:].([\w\(\)\s]+[\n$\s])/)

#a= doctor_map.scan(/([\b\w\d]+)[:].([\*\<\)\(\w\d\s*\b]+)[\n$\s\)]+/)



#a= doctor_map.scan(/([\b\w\d]+)[:].([\-\*\<\)\(\w\d\s*\b]+)[\n$\s*\)]+/)


#a= doctor_map.scan(/([\b\w\d]+)[:].([\-\*\<\)\(\w\d\s*\b]*)[\n$\s$\b$]?/)  =>

a= doctor_map.scan(/([\b\w\d]+)[:].([\-\*\<\)\(\w\d\s+\b*]+)[\n$\s$\b$]+/)




#a.each_index do |i|
#subarray = a[i]
#subarray.each_index do |x|
#puts  "a[#{i}][#{x}]" << a[i][x]
#end
#end



a.each_index do |i|
subarray = a[i]
subarray.each_index do |x|
puts "a[#{i}][#{x}]=>" << a[i][x]
end
end


puts "Enter value of p and q in a[p][q]"
p= gets.chomp.to_i
q= gets.chomp.to_i
puts "The value of a[#{p}][#{q}]:" << a[p][q]


#a.map do |i|
#subarray = a[i]
#subarray.map do |x|
#puts "a[#{i}][#{x}]=>" << a[i][x]
#end
#end

