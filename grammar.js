module.exports = grammar({
    name: 'ACL2s',

    rules: {
        source_file: $ => repeat(choice($._definition, $._expression, $._comment, $.meta_command)),

        _definition: $ => choice(
            $.function_definition,
            $.data_definition
            // TODO: Other definitions?
        ),

        _expression: $ => choice(
            $.literal,
            $.expression
        ),

        _comment: $ => choice(
            $.line_comment,
            $.block_comment
        ),

        meta_command: $ => choice(
            ':logic',
            ':program'
        )




    }
});