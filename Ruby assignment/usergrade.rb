class UserGrade
def usergrade 
grade = {}
puts "Enter the name:"
name= gets.chomp
grade[name]
puts "Enter the grade:"
grd = gets.chomp
grade[name]= grd
puts "#{name} has grade #{grd}"
puts "#{grade}"
answer = "yes"
while answer == "yes"
	puts "Would you like to to add more"
	answer = gets.chomp

	case answer 
	when "yes"
		puts "Enter the name:"
		name= gets.chomp
		grade[name]
		puts "Enter the grade:"
		grd = gets.chomp
		grade[name]= grd
		puts "#{name} has grade #{grd}"
		puts "#{grade}"
	when "no"
		puts "Following are the list of students:"
	else
		puts"Enter the grade to know corresponding name/s:"
		grade_to_name= gets.chomp
		puts "Name of student with grade " +grade_to_name +" is/are"
		puts grade.map{|key,value| value ==grade_to_name ? key:nil}.compact
		puts "wants to sort the list with grade?"
		puts "Types yes or no:"
		get_response =gets.chomp

		if get_response=="yes"
			grade_sorted = Hash[grade.sort_by{|val1,val2| [val2,val1]}]
			puts grade_sorted.each{|v1,v2| puts "Name:#{v1},\t Grade:#{v2}"}
		else 
		end
	end
end

#puts "List of student with grade:#{grade}"
end
end

obj = UserGrade.new
obj.usergrade