sub1 = IO.read("subs.txt")

subsplitted = sub1.split("\n\n")
subsclean = []
subsplitted.each do |item|
        subsclean << item.split("\n")
end
puts subsclean
