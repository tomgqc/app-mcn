# app-mcn

# Happy Path
@startuml
skinparam actorStyle awesome
:User: --> (Lifeness) : Artifact\n+\nIdentifier
:User: <-- (Lifeness) : Success
"User application" as :User:
"Lifeness test service" as (Lifeness)
(Lifeness) --> (Comparison) : Artifact\n+\nIdentifier
(Lifeness) --> (Comparison) : Success
"Facial comparison service" as (Comparison)
@enduml